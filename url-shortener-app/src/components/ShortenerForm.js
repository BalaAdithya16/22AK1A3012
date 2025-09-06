import React, { useState } from 'react';
import { log } from 'affordmed-logging-middleware';
import '../styles.css';

const ShortenerForm = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const generateShortCode = () => {
        return Math.random().toString(36).substring(2, 10);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!longUrl.startsWith('http')) {
            await log('frontend', 'error', 'component', `Invalid URL: ${longUrl}`);
            alert('Please enter a valid URL starting with http://https');
            return;
        }

        const shortCode = generateShortCode();
        const newShortUrl = `http://localhost:3000/${shortCode}`;
        
        setShortUrl(newShortUrl);
        await log('frontend', 'info', 'component', `Created short URL: ${newShortUrl} for ${longUrl}`);
    };

    return (
        <div className="container">
            <h1 style={{textAlign: 'center', color: '#2d3748', marginBottom: '30px'}}>
                URL Shortener
            </h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="url"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        placeholder="https://example.com"
                        required
                    />
                </div>
                
                <button type="submit">Shorten URL</button>
            </form>

            {shortUrl && (
                <div className="result">
                    <h3>Short URL Created:</h3>
                    <p className="short-url">{shortUrl}</p>
                </div>
            )}
        </div>
    );
};

export default ShortenerForm;