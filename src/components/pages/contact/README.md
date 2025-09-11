# Contact Page Components - Instructions for Stephen

## Was du hier findest:
- `ContactPageHeader.vue` - Header Section der Contact Page
- `ContactPageForm.vue` - Kontaktformular
- `ContactPageInfo.vue` - Kontaktinformationen

## Wie du arbeitest:
1. Bearbeite jede Component einzeln
2. Jede Component hat ihre eigenen Styles (scoped CSS)
3. Alle Components werden automatisch in `ContactView.vue` angezeigt

## Wenn du neue Components hinzufügen willst:

### 1. Neue Component erstellen:
```bash
# Erstelle neue Datei hier im contact/ Ordner
touch ContactPageMap.vue
```

### 2. Component Structure:
```vue
<template>
  <div class="contact-map">
    <h2>Dein Titel</h2>
    <!-- Dein Content -->
  </div>
</template>

<script setup lang="ts">
// Deine Logik
</script>

<style scoped>
/* Deine Styles */
</style>
```

### 3. Component in ContactView.vue einbinden:
```vue
<!-- In /src/views/ContactView.vue -->
<script setup lang="ts">
import ContactPageMap from '@/components/pages/contact/ContactPageMap.vue'
</script>

<template>
  <ContactPageMap />
</template>
```

## Wichtige Punkte:

### Routing:
- Die Contact Page ist bereits unter `/contact` verfügbar
- Du musst NICHTS am Routing ändern

### Styling:
- Jede Component hat `scoped` CSS - Styles beeinflussen nur diese Component
- Verwende die gleichen Farben wie andere Pages: `#195aa5` (blau), `#d12255` (pink)

### TypeScript:
- Du kannst TypeScript verwenden oder einfach JavaScript
- Für reactive data: `import { ref, reactive } from 'vue'`

### Neue Pages erstellen (für später):
Wenn du komplett neue Pages brauchst (nicht nur Contact Components):

1. **Neue View erstellen:**
   ```bash
   # In /src/views/
   touch NewPageView.vue
   ```

2. **Routing hinzufügen:**
   ```typescript
   // In /src/router/index.ts
   {
     path: '/new-page',
     name: 'new-page', 
     component: () => import('../views/NewPageView.vue'),
   }
   ```

3. **Navigation Link hinzufügen:**
   - Such nach der Navigation Component
   - Füge einen Link hinzu: `<router-link to="/new-page">New Page</router-link>`

## Hilfe:
- Schau dir andere Pages an: `/src/components/pages/home/` für Beispiele
- Jede Component funktioniert unabhängig
- Bei Fehlern: Browser Konsole prüfen (F12)

Viel Erfolg! 🚀