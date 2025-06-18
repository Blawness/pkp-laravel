# Certificate Manager

Simple Laravel 10 application for managing land certificates.

## Installation

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm install
npm run build
php artisan serve
```

## Features
- Authentication with admin/user roles
- CRUD management for users and land certificates
- Activity logs for login/logout and CRUD actions
- Tailwind CSS based UI
