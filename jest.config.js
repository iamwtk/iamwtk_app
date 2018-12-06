module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    snapshotSerializers: ["enzyme-to-json/serializer"],    
    moduleNameMapper: {       
        "\\.(css|scss)$": "identity-obj-proxy"
    }
}