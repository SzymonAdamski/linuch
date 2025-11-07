const fetch = require('node-fetch');

async function queryQwen3(prompt) {
    try {
        const response = await fetch('http://qwen3:8000/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "qwen3",
                messages: [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": prompt}
                ]
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error querying Qwen3:', error);
        return 'Error communicating with AI model';
    }
}
