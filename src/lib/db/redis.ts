import Redis, { Redis as RedisType } from 'ioredis';


class RedisClient {
    private static instance: RedisType;
    private static maxRetries = 10;
    private static retryCount = 0;

    private constructor() { }

    public static getInstance(): RedisType {
        if (!RedisClient.instance) {
            const redisUrl = process.env.REDIS_URL;
            const redisPassword = process.env.REDIS_PASSWORD;
            
            if (!redisUrl) {
                throw new Error('REDIS_URL is not defined');
            }
            
            RedisClient.instance = new Redis(redisUrl, {
                password: redisPassword,
                maxRetriesPerRequest: 3,
                retryStrategy(times) {
                    const delay = Math.min(times * 500, 2000);
                    return delay;
                }
            });

            // Add event listeners
            RedisClient.instance.on('error', (err) => {
                console.error('Redis error:', err);
            });

            RedisClient.instance.on('connect', () => {
                console.log('Redis connected');
                RedisClient.retryCount = 0;
            });

            RedisClient.instance.on('reconnecting', () => {
                RedisClient.retryCount++;
                if (RedisClient.retryCount > RedisClient.maxRetries) {
                    console.error('Max Redis reconnection attempts reached');
                    process.exit(1);
                }
                console.log(`Redis reconnecting... Attempt ${RedisClient.retryCount}`);
            });
        }
        return RedisClient.instance;
    }

}

export const redis = RedisClient.getInstance();

