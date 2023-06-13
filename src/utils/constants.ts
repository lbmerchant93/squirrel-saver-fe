export const enum PossibleRoutes {
    ROOT = '/',
    LOGIN = '/login',
    CREATE_ACCOUNT = '/create-account',
    CONTACT_DEVS = '/contact-devs'
}

export const mockUserData = {
    displayName: "Lucas Merchant",
    email: "test@test.com",
    id: "1",
    totalSavings: 5050,
    savingsRange: [1, 100],
    numbersDrawn: [99, 17, 42, 6, 10, 38, 87, 2, 22, 31, 14, 100, 45, 41, 79, 16, 49, 55, 62, 8, 97, 13, 58, 11, 73, 23],
    numbersNotDrawn: [1, 3, 4, 5, 7, 9, 12, 15, 18, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 39, 40, 43, 44, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98]
};