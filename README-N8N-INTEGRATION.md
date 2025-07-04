
# Integración Mr. Volt con n8n

Este documento explica cómo integrar Mr. Volt newsletter con n8n para la automatización de contenido.

## Endpoints Disponibles

### 1. News Webhook
**URL:** `https://nyreibhwxcgdpaydtiur.supabase.co/functions/v1/news-webhook`

#### POST - Crear Nueva Noticia
Permite a n8n enviar nuevas noticias al sistema.

**Headers:**
```
Content-Type: application/json
Authorization: Bearer [SUPABASE_ANON_KEY]
```

**Body:**
```json
{
  "title": "Título de la noticia",
  "summary": "Resumen detallado de la noticia...",
  "source_url": "https://ejemplo.com/noticia",
  "image_url": "https://ejemplo.com/imagen.jpg", // Opcional
  "published_at": "2025-01-04T10:00:00Z"
}
```

#### GET - Obtener Noticias
Obtiene todas las noticias recientes.

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Título",
      "summary": "Resumen",
      "source_url": "URL",
      "image_url": "URL imagen",
      "published_at": "2025-01-04T10:00:00Z",
      "selected_for_edition": false
    }
  ]
}
```

### 2. Weekly Edition
**URL:** `https://nyreibhwxcgdpaydtiur.supabase.co/functions/v1/weekly-edition`

#### POST - Crear Edición Semanal
Permite crear una nueva edición semanal con noticias seleccionadas.

**Headers:**
```
Content-Type: application/json
Authorization: Bearer [SUPABASE_ANON_KEY]
```

**Body:**
```json
{
  "edition_date": "2025-01-04",
  "intro_text": "Texto introductorio de la edición", // Opcional
  "news_ids": ["uuid1", "uuid2", "uuid3", "uuid4", "uuid5"]
}
```

#### GET - Obtener Última Edición
Obtiene la edición semanal más reciente con sus noticias.

**Response:**
```json
{
  "data": [
    {
      "edition_id": "uuid",
      "edition_date": "2025-01-04",
      "intro_text": "Texto intro",
      "news_id": "uuid",
      "title": "Título noticia",
      "summary": "Resumen",
      "source_url": "URL",
      "image_url": "URL imagen",
      "published_at": "2025-01-04T10:00:00Z",
      "display_order": 1
    }
  ]
}
```

## Flujo de Trabajo Recomendado con n8n

### 1. Recolección de Noticias
- **Trigger:** Webhook o Cron (diario)
- **Acción:** Scraping de fuentes de noticias
- **Output:** POST a `/news-webhook` por cada noticia

### 2. Creación de Edición Semanal
- **Trigger:** Webhook o Cron (semanal, viernes)
- **Pasos:**
  1. GET a `/news-webhook` para obtener noticias recientes
  2. Filtrar/seleccionar las 5 mejores noticias
  3. POST a `/weekly-edition` para crear la edición

### 3. Ejemplo de Workflow n8n

```json
{
  "nodes": [
    {
      "name": "Weekly Trigger",
      "type": "n8n-nodes-base.cron",
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "cronExpression",
              "expression": "0 9 * * 5"
            }
          ]
        }
      }
    },
    {
      "name": "Get Recent News",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://nyreibhwxcgdpaydtiur.supabase.co/functions/v1/news-webhook",
        "method": "GET",
        "headers": {
          "Authorization": "Bearer [SUPABASE_ANON_KEY]"
        }
      }
    },
    {
      "name": "Select Top 5",
      "type": "n8n-nodes-base.code",
      "parameters": {
        "jsCode": "// Seleccionar las 5 noticias más recientes\nconst news = items[0].json.data;\nconst top5 = news.slice(0, 5);\nconst newsIds = top5.map(item => item.id);\n\nreturn [{\n  json: {\n    edition_date: new Date().toISOString().split('T')[0],\n    intro_text: \"Las noticias eléctricas más importantes de esta semana\",\n    news_ids: newsIds\n  }\n}];"
      }
    },
    {
      "name": "Create Weekly Edition",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://nyreibhwxcgdpaydtiur.supabase.co/functions/v1/weekly-edition",
        "method": "POST",
        "headers": {
          "Authorization": "Bearer [SUPABASE_ANON_KEY]",
          "Content-Type": "application/json"
        },
        "body": "={{ JSON.stringify($json) }}"
      }
    }
  ]
}
```

## Configuración

### Variables de Entorno Necesarias
- `SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cmVpYmh3eGNnZHBheWR0aXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1Mzg4MjIsImV4cCI6MjA2NzExNDgyMn0.bkzxIxiQ0CMmIy0s-a4X6sRQvzc4VF-4hWsstcTSEkQ`

### Fuentes de Noticias Sugeridas
- Electrek.co
- InsideEVs
- Motor Pasión
- Híbridos y Eléctricos
- Green Car Reports

## Notas Importantes
- Todas las APIs están protegidas con Row Level Security pero configuradas para acceso público
- Las fechas deben estar en formato ISO 8601
- Los UUIDs se generan automáticamente
- Las imágenes son opcionales pero recomendadas para mejor UX
