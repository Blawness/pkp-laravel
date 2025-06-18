# Agents

This project supports lightweight background scripts called **agents**. Agents handle recurring or batch tasks such as statistics gathering or log auditing. Each agent lives in `app/Agents` and may be invoked through Artisan commands or scheduled jobs.

## Planned Agents

- **CertificateStatAgent**
- **UserLogAuditor**

## CertificateStatAgent

**Purpose:** Collects certificate statistics (total count, expired certificates, etc.) to surface on reports or dashboards.

**Location:** `app/Agents/CertificateStatAgent.php`

**Input/Output:** Expects no arguments when run. Produces aggregated data that may be logged or cached for later use.

**Run via Artisan:**

```bash
php artisan agent:run CertificateStatAgent
```

## UserLogAuditor

**Purpose:** Reviews user activity logs and flags suspicious behaviour.

**Location:** `app/Agents/UserLogAuditor.php`

**Input/Output:** Receives optional parameters for date ranges. Outputs audit results to the log.

**Run via Artisan:**

```bash
php artisan agent:run UserLogAuditor
```

## Registering the Agent Runner

Add a custom Artisan command in `routes/console.php` to invoke agents by name:

```php
use Illuminate\Support\Facades\Artisan;

Artisan::command('agent:run {name}', function (string $name) {
    $class = "App\\Agents\\{$name}";
    if (class_exists($class)) {
        (new $class())->run();
        $this->info("{$name} executed");
    } else {
        $this->error('Agent not found');
    }
})->describe('Run a registered agent');
```

## Logging and Testing

- Use Laravel's built in `Log` facade inside agents for progress and error reporting.
- Unit test agent logic by instantiating the class directly in your test suite.
- If agents modify the database, wrap interactions in transactions and roll them back during tests.

## Agent Summary

| Agent | File |
|-------|------|
| CertificateStatAgent | `app/Agents/CertificateStatAgent.php` |
| UserLogAuditor | `app/Agents/UserLogAuditor.php` |

