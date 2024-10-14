// backend/src/config/index.ts

interface Config {
    /**
     * The port the backend server should listen on.
     */
    PORT: number;
    /**
     * The MongoDB connection string.
     */
    MONGODB_URI: string;
    /**
     * The secret used to sign CSRF tokens.
     */
    CSRF_SECRET: string;
    /**
     * The secret used to sign JWT tokens.
     */
    JWT_SECRET: string;
    /**
     * The URL of the frontend application.
     */
}

function getString(env: string, acceptableValues? : string[]) {
    if (!process.env[env]) {
        throw new Error(`Environment variable ${env} is missing`);
    }
    if (acceptableValues && !acceptableValues.includes(process.env[env]!)) {
        throw new Error(`Environment variable ${env} must be one of ${acceptableValues.join(', ')}`);
    }
    return process.env[env]!;
}

function getNumber(env: string) {
    if (!process.env[env]) {
        throw new Error(`Environment variable ${env} is missing`);
    }
    return parseInt(process.env[env]!, 10);
}

function init(): Config {
    try {
        return {
            PORT: getNumber('BACKEND_PORT'),
            MONGODB_URI: getString('MONGODB_URI'),
            CSRF_SECRET: getString('CSRF_SECRET'),
            JWT_SECRET: getString('JWT_SECRET'),
            // FRONTEND_URL: getString('FRONTEND_URL'),
            // Add other environment variables here
        };
    } catch (error) {
        console.log("Envs found at config error: ");
        console.log(process.env);
        throw error;
    }

}

const config: Config = init();

export default config;