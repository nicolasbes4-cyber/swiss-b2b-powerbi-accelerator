#!/bin/bash
echo "🚀 Configuration de Swiss B2B Power BI Accelerator..."

if [ ! -f .env ]; then
  cp .env.template .env
  echo "✅ Fichier .env créé. Remplissez vos secrets."
fi

echo "✅ Configuration terminée !"
