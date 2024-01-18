FROM oven/bun:alpine AS base

WORKDIR /work

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 3000