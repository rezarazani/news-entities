export class AppError extends Error {

    public isOperational: boolean;
    public errorCode: number;
    public name: errors;
    public description: string;
    public httpStatus: number;

    constructor(commonError: Errors<commonError>['Error'], description: string, isOperational: boolean) {
        super();
        this.errorCode = commonError.errorCode;
        this.name = commonError.name;
        this.description = description;
        this.message = description;
        this.httpStatus = commonError.httpStatus;
        this.isOperational = isOperational;
    }

}

// type errors =
//     'Error' |
//     'InternalServerError' |
//     'InputValidationError' |
//     'ResourceNotFound' |
//     'InvalidGoogleIdToken' |
//     'ClientAlreadyRegistered' |
//     'ClientNotRegistered' |
//     'InvalidVerificationCode' |
//     'VerificationCodeExpired' |
//     'SmsLimitationError' |
//     'InvalidFacebookAccessToken' |
//     'DriverNotRegistered' |
//     'InvalidRefreshToken' |
//     'JWTAuthenticationError' |
//     'PlaceAddressNotFound' |
//     'ServicetypeUnavailable' |
//     'InvalidRequestId' |
//     'BadRequest' |
//     'IllegalRequestAccept';

export class ErrorHandler {
    static handleError(error: AppError) {
        // log error using winston !
        // send error to the sentry !
    }

    static isTrustedError(error: AppError): boolean {
        return error.isOperational;
    }
}

type commonError = 'Error' |
    'InputValidationError' |
    'InternalServerError' |
    'BadRequest' |
    'ResourceNotFound' |
    'PlaceAddressNotFound' | 
    'NotAvailable' | 
    'Duplicate';
   
type clientError = 'ServicetypeUnavailable' |
    'InvalidGoogleIdToken' |
    'InvalidFacebookAccessToken' |
    'ClientNotRegistered' |
    'InvalidVerificationCode' |
    'VerificationCodeExpired' |
    'SmsLimitationError' |
    'ClientAlreadyRegistered' |
    'InvalidRefreshToken' |
    'JWTAuthenticationError' |
    'InvalidPromoCode' |
    'InvalidAppleIdToken' |
    'InvalidScheduleConditions' |
    'InvalidClientAction';

type driverError = 'DriverNotRegistered' |
    'InvalidRefreshToken' |
    'JWTAuthenticationError' |
    'InvalidDriverAction' |
    'InvalidDriverPassword' |
    'DriverAlreadyRegistered' |
    'DriverNotAuthorized' |
    'LowWalletCredit' |
    'CannotCashOut';

type businessError = 'JWTAuthenticationError' | 'InvalidCredential' | 'ServicetypeUnavailable'

type dispatcherError = 'ServicetypeUnavailable' | 'InvalidRefreshToken' | 'JWTAuthenticationError';

type errors = commonError | clientError | driverError | dispatcherError | businessError;

type Errors<T extends errors> = {
    [key in T]: {
        name: errors,
        errorCode: number,
        httpStatus: number
    }
}

export const commonError: Errors<commonError> = {
    Error: {
        name: "Error",
        errorCode: -500,
        httpStatus: 500
    },
    InternalServerError: {
        name: 'InternalServerError',
        errorCode: -500,
        httpStatus: 500
    },
    BadRequest: {
        name: 'BadRequest',
        errorCode: -400,
        httpStatus: 400
    },
    ResourceNotFound: {
        name: 'ResourceNotFound',
        errorCode: -404,
        httpStatus: 404
    },
    InputValidationError: {
        name: 'InputValidationError',
        errorCode: -1,
        httpStatus: 400
    },
    PlaceAddressNotFound: {
        name: 'PlaceAddressNotFound',
        errorCode: 2,
        httpStatus: 200
    },
    NotAvailable : {
        name : 'NotAvailable' ,
        errorCode : -17 ,
        httpStatus : 200
    } ,
    Duplicate : {
        name : 'Duplicate' ,
        errorCode : -18 ,
        httpStatus : 200
    }
}

export const clientError: Errors<clientError> = {
    ServicetypeUnavailable: {
        name: "ServicetypeUnavailable",
        errorCode: 1,
        httpStatus: 200
    },
    InvalidGoogleIdToken: {
        name: 'InvalidGoogleIdToken',
        errorCode: -2,
        httpStatus: 400
    },
    InvalidAppleIdToken: {
        name: 'InvalidAppleIdToken',
        errorCode: -2,
        httpStatus: 400
    },
    InvalidFacebookAccessToken: {
        name: 'InvalidFacebookAccessToken',
        errorCode: -2,
        httpStatus: 400
    },
    ClientNotRegistered: {
        name: 'ClientNotRegistered',
        errorCode: -3,
        httpStatus: 400
    },
    InvalidVerificationCode: {
        name: 'InvalidVerificationCode',
        errorCode: -4,
        httpStatus: 400
    },
    VerificationCodeExpired: {
        name: 'VerificationCodeExpired',
        errorCode: -5,
        httpStatus: 400
    },
    SmsLimitationError: {
        name: 'SmsLimitationError',
        errorCode: -5,
        httpStatus: 400
    },
    ClientAlreadyRegistered: {
        name: 'ClientAlreadyRegistered',
        errorCode: -6,
        httpStatus: 400
    },
    InvalidRefreshToken: {
        name: 'InvalidRefreshToken',
        errorCode: -8,
        httpStatus: 403
    },
    JWTAuthenticationError: {
        name: 'JWTAuthenticationError',
        errorCode: -9,
        httpStatus: 401
    },
    InvalidPromoCode: {
        name: 'InvalidPromoCode',
        errorCode: -16,
        httpStatus: 400
    },
    InvalidScheduleConditions: {
        name: 'InvalidScheduleConditions',
        errorCode: -20,
        httpStatus: 400
    },
    InvalidClientAction: {
        name: 'InvalidClientAction',
        errorCode: -21,
        httpStatus: 403
    },
}

export const driverError: Errors<driverError> = {
    DriverNotRegistered: {
        name: 'DriverNotRegistered',
        errorCode: -7,
        httpStatus: 400
    },
    InvalidRefreshToken: {
        name: 'InvalidRefreshToken',
        errorCode: -8,
        httpStatus: 403
    },
    JWTAuthenticationError: {
        name: 'JWTAuthenticationError',
        errorCode: -9,
        httpStatus: 401
    },
    InvalidDriverAction: {
        name: 'InvalidDriverAction',
        errorCode: -10,
        httpStatus: 403
    },
    InvalidDriverPassword: {
        name: 'InvalidDriverPassword',
        errorCode: -11,
        httpStatus: 400
    },
    DriverAlreadyRegistered: {
        name: 'DriverAlreadyRegistered',
        errorCode: -12,
        httpStatus: 400
    },
    DriverNotAuthorized: {
        name: 'DriverNotAuthorized',
        errorCode: -13,
        httpStatus: 400
    },
    LowWalletCredit: {
        name: 'LowWalletCredit',
        errorCode: -14,
        httpStatus: 400
    },
    CannotCashOut: {
        name: 'CannotCashOut',
        errorCode: -15,
        httpStatus: 400
    },
}


export const dispatcherError: Errors<dispatcherError> = {
    ServicetypeUnavailable: {
        name: "ServicetypeUnavailable",
        errorCode: -19 ,
        httpStatus: 200
    },
    InvalidRefreshToken: {
        name: 'InvalidRefreshToken',
        errorCode: -8,
        httpStatus: 403
    },
    JWTAuthenticationError: {
        name: 'JWTAuthenticationError',
        errorCode: -9,
        httpStatus: 401
    },
}
export const businessError: Errors<businessError> = {
    ServicetypeUnavailable: {
        name: "ServicetypeUnavailable",
        errorCode: 1,
        httpStatus: 200
    },
    InvalidCredential: {
        name: 'InvalidCredential',
        errorCode: -8,
        httpStatus: 403
    },
    JWTAuthenticationError: {
        name: 'JWTAuthenticationError',
        errorCode: -9,
        httpStatus: 401
    },
}