const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWNjaGFhZGl0aHlhQGdtYWlsLmNvbSIsImV4cCI6MTc1NzE1MzY2MCwiaWF0IjoxNzU3MTUyNzYwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjExNGZiYjYtOGRlNy00YjMwLThmOGQtMGE3ZGE0MTQwZGM3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYmFsYWFkaXRoeWEiLCJzdWIiOiIxMThjNGNhYi04YmI3LTQ0MTItOWViMC1iMTc2NGUzODBkNWQifSwiZW1haWwiOiJ2YWNjaGFhZGl0aHlhQGdtYWlsLmNvbSIsIm5hbWUiOiJiYWxhYWRpdGh5YSIsInJvbGxObyI6IjIyYWsxYTMwMTIiLCJhY2Nlc3NDb2RlIjoieXpadmdHIiwiY2xpZW50SUQiOiIxMThjNGNhYi04YmI3LTQ0MTItOWViMC1iMTc2NGUzODBkNWQiLCJjbGllbnRTZWNyZXQiOiJUcUhnbUJSeERoblNaV1V1In0.GGi_0e-YmwgT20vgXSgFs4ABCwERNgxU6olqHd14J8s";

async function log(stack, level, packageName, message) {
    const payload = { stack, level, "package": packageName, message };
    
    try {
        const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AUTH_TOKEN}`
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            console.error('Log API failed:', response.status);
        }
    } catch (error) {
        console.error('Failed to send log:', error);
    }
}

module.exports = { log };