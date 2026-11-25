# Real-Time Speech-to-Text — Speech Studio

A multilingual speech transcription MVP featuring browser speech recognition, editable transcript text, transcript history, search, and CRUD endpoints backed by PostgreSQL.

## Features
- Speech recognition (Hindi and English language selections)
- Live interim and final transcription display
- Edit transcript before saving
- Save, list, update, delete transcript records
- Search saved transcript history
- Copy text
- Responsive UI

## Stack
- HTML, CSS, JavaScript
- Web Speech API (browser speech engine)
- PostgreSQL
- Hatchable-hosted API handlers

## Important limitations
Speech recognition is browser-provided (typically best tested in Chrome). It is not a self-hosted Whisper model. Recognition and language availability may depend on browser, network, and device. The API source uses the Hatchable server runtime (`hatchable` SDK) and is not a standalone Node.js server without adapting the handlers.

## Files
- `public/` — front-end assets
- `api/transcripts/` — REST API handlers
- `migrations/` — PostgreSQL schema

## API
- `GET /api/transcripts` — list saved transcripts
- `POST /api/transcripts` — create transcript (JSON: `text`, `language`, `duration_seconds`)
- `PUT /api/transcripts/:id` — update transcript
- `DELETE /api/transcripts/:id` — delete transcript

## Deployment
This project was deployed using the Hatchable hosting environment, which provides the PostgreSQL database and serverless API runtime. To run elsewhere, adapt the API handler/runtime and configure a PostgreSQL connection.

## Assignment
AI Tech Hiring Assignment: Real-Time Speech-to-Text Web Application.
