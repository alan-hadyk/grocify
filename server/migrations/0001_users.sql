DO $$ BEGIN
    CREATE TYPE preferred_lang AS ENUM ('en', 'pl');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
    id                 UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    username           TEXT UNIQUE NOT NULL,
    password_hash      TEXT NOT NULL,
    email              TEXT NOT NULL,
    preferred_language preferred_lang NOT NULL DEFAULT 'en',
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
