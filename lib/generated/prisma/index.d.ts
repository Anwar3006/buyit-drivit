
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model UserSavedCar
 * 
 */
export type UserSavedCar = $Result.DefaultSelection<Prisma.$UserSavedCarPayload>
/**
 * Model TestDriveBooking
 * 
 */
export type TestDriveBooking = $Result.DefaultSelection<Prisma.$TestDriveBookingPayload>
/**
 * Model DealershipInfo
 * 
 */
export type DealershipInfo = $Result.DefaultSelection<Prisma.$DealershipInfoPayload>
/**
 * Model WorkingHours
 * 
 */
export type WorkingHours = $Result.DefaultSelection<Prisma.$WorkingHoursPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CarStatus: {
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
  SOLD: 'SOLD'
};

export type CarStatus = (typeof CarStatus)[keyof typeof CarStatus]


export const BookingStatus: {
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING',
  NO_SHOW: 'NO_SHOW'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CarStatus = $Enums.CarStatus

export const CarStatus: typeof $Enums.CarStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSavedCar`: Exposes CRUD operations for the **UserSavedCar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSavedCars
    * const userSavedCars = await prisma.userSavedCar.findMany()
    * ```
    */
  get userSavedCar(): Prisma.UserSavedCarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testDriveBooking`: Exposes CRUD operations for the **TestDriveBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestDriveBookings
    * const testDriveBookings = await prisma.testDriveBooking.findMany()
    * ```
    */
  get testDriveBooking(): Prisma.TestDriveBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealershipInfo`: Exposes CRUD operations for the **DealershipInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealershipInfos
    * const dealershipInfos = await prisma.dealershipInfo.findMany()
    * ```
    */
  get dealershipInfo(): Prisma.DealershipInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingHours`: Exposes CRUD operations for the **WorkingHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingHours
    * const workingHours = await prisma.workingHours.findMany()
    * ```
    */
  get workingHours(): Prisma.WorkingHoursDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Car: 'Car',
    UserSavedCar: 'UserSavedCar',
    TestDriveBooking: 'TestDriveBooking',
    DealershipInfo: 'DealershipInfo',
    WorkingHours: 'WorkingHours'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "car" | "userSavedCar" | "testDriveBooking" | "dealershipInfo" | "workingHours"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      UserSavedCar: {
        payload: Prisma.$UserSavedCarPayload<ExtArgs>
        fields: Prisma.UserSavedCarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSavedCarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSavedCarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          findFirst: {
            args: Prisma.UserSavedCarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSavedCarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          findMany: {
            args: Prisma.UserSavedCarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          create: {
            args: Prisma.UserSavedCarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          createMany: {
            args: Prisma.UserSavedCarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSavedCarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          delete: {
            args: Prisma.UserSavedCarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          update: {
            args: Prisma.UserSavedCarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          deleteMany: {
            args: Prisma.UserSavedCarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSavedCarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSavedCarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          upsert: {
            args: Prisma.UserSavedCarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          aggregate: {
            args: Prisma.UserSavedCarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSavedCar>
          }
          groupBy: {
            args: Prisma.UserSavedCarGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSavedCarGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSavedCarCountArgs<ExtArgs>
            result: $Utils.Optional<UserSavedCarCountAggregateOutputType> | number
          }
        }
      }
      TestDriveBooking: {
        payload: Prisma.$TestDriveBookingPayload<ExtArgs>
        fields: Prisma.TestDriveBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestDriveBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestDriveBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          findFirst: {
            args: Prisma.TestDriveBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestDriveBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          findMany: {
            args: Prisma.TestDriveBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          create: {
            args: Prisma.TestDriveBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          createMany: {
            args: Prisma.TestDriveBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestDriveBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          delete: {
            args: Prisma.TestDriveBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          update: {
            args: Prisma.TestDriveBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          deleteMany: {
            args: Prisma.TestDriveBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestDriveBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestDriveBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          upsert: {
            args: Prisma.TestDriveBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          aggregate: {
            args: Prisma.TestDriveBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestDriveBooking>
          }
          groupBy: {
            args: Prisma.TestDriveBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestDriveBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestDriveBookingCountArgs<ExtArgs>
            result: $Utils.Optional<TestDriveBookingCountAggregateOutputType> | number
          }
        }
      }
      DealershipInfo: {
        payload: Prisma.$DealershipInfoPayload<ExtArgs>
        fields: Prisma.DealershipInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealershipInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealershipInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          findFirst: {
            args: Prisma.DealershipInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealershipInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          findMany: {
            args: Prisma.DealershipInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          create: {
            args: Prisma.DealershipInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          createMany: {
            args: Prisma.DealershipInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealershipInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          delete: {
            args: Prisma.DealershipInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          update: {
            args: Prisma.DealershipInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          deleteMany: {
            args: Prisma.DealershipInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealershipInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealershipInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          upsert: {
            args: Prisma.DealershipInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          aggregate: {
            args: Prisma.DealershipInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealershipInfo>
          }
          groupBy: {
            args: Prisma.DealershipInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealershipInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealershipInfoCountArgs<ExtArgs>
            result: $Utils.Optional<DealershipInfoCountAggregateOutputType> | number
          }
        }
      }
      WorkingHours: {
        payload: Prisma.$WorkingHoursPayload<ExtArgs>
        fields: Prisma.WorkingHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          findFirst: {
            args: Prisma.WorkingHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          findMany: {
            args: Prisma.WorkingHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          create: {
            args: Prisma.WorkingHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          createMany: {
            args: Prisma.WorkingHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          delete: {
            args: Prisma.WorkingHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          update: {
            args: Prisma.WorkingHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          deleteMany: {
            args: Prisma.WorkingHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>[]
          }
          upsert: {
            args: Prisma.WorkingHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHoursPayload>
          }
          aggregate: {
            args: Prisma.WorkingHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingHours>
          }
          groupBy: {
            args: Prisma.WorkingHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingHoursCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingHoursCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    car?: CarOmit
    userSavedCar?: UserSavedCarOmit
    testDriveBooking?: TestDriveBookingOmit
    dealershipInfo?: DealershipInfoOmit
    workingHours?: WorkingHoursOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    testDrives: number
    savedCars: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testDrives?: boolean | UserCountOutputTypeCountTestDrivesArgs
    savedCars?: boolean | UserCountOutputTypeCountSavedCarsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    testDrivesBookings: number
    savedBy: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testDrivesBookings?: boolean | CarCountOutputTypeCountTestDrivesBookingsArgs
    savedBy?: boolean | CarCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountTestDrivesBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
  }


  /**
   * Count Type DealershipInfoCountOutputType
   */

  export type DealershipInfoCountOutputType = {
    workingHours: number
  }

  export type DealershipInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | DealershipInfoCountOutputTypeCountWorkingHoursArgs
  }

  // Custom InputTypes
  /**
   * DealershipInfoCountOutputType without action
   */
  export type DealershipInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfoCountOutputType
     */
    select?: DealershipInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealershipInfoCountOutputType without action
   */
  export type DealershipInfoCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHoursWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    imageUrl: number
    phone: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    testDrives?: boolean | User$testDrivesArgs<ExtArgs>
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "imageUrl" | "phone" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testDrives?: boolean | User$testDrivesArgs<ExtArgs>
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      testDrives: Prisma.$TestDriveBookingPayload<ExtArgs>[]
      savedCars: Prisma.$UserSavedCarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string | null
      imageUrl: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testDrives<T extends User$testDrivesArgs<ExtArgs> = {}>(args?: Subset<T, User$testDrivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedCars<T extends User$savedCarsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.testDrives
   */
  export type User$testDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    cursor?: TestDriveBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * User.savedCars
   */
  export type User$savedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    cursor?: UserSavedCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seats: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seats: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuelType: string | null
    bodyType: string | null
    transmission: string | null
    description: string | null
    seats: number | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuelType: string | null
    bodyType: string | null
    transmission: string | null
    description: string | null
    seats: number | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    price: number
    mileage: number
    color: number
    fuelType: number
    bodyType: number
    transmission: number
    description: number
    seats: number
    status: number
    featured: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    bodyType?: true
    transmission?: true
    description?: true
    seats?: true
    status?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    bodyType?: true
    transmission?: true
    description?: true
    seats?: true
    status?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    bodyType?: true
    transmission?: true
    description?: true
    seats?: true
    status?: true
    featured?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    make: string
    model: string
    year: number
    price: Decimal
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats: number | null
    status: $Enums.CarStatus
    featured: boolean
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    bodyType?: boolean
    transmission?: boolean
    description?: boolean
    seats?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testDrivesBookings?: boolean | Car$testDrivesBookingsArgs<ExtArgs>
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    bodyType?: boolean
    transmission?: boolean
    description?: boolean
    seats?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    bodyType?: boolean
    transmission?: boolean
    description?: boolean
    seats?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    bodyType?: boolean
    transmission?: boolean
    description?: boolean
    seats?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "price" | "mileage" | "color" | "fuelType" | "bodyType" | "transmission" | "description" | "seats" | "status" | "featured" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testDrivesBookings?: boolean | Car$testDrivesBookingsArgs<ExtArgs>
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      testDrivesBookings: Prisma.$TestDriveBookingPayload<ExtArgs>[]
      savedBy: Prisma.$UserSavedCarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      year: number
      price: Prisma.Decimal
      mileage: number
      color: string
      fuelType: string
      bodyType: string
      transmission: string
      description: string
      seats: number | null
      status: $Enums.CarStatus
      featured: boolean
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testDrivesBookings<T extends Car$testDrivesBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Car$testDrivesBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Car$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Car$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly make: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Decimal'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly color: FieldRef<"Car", 'String'>
    readonly fuelType: FieldRef<"Car", 'String'>
    readonly bodyType: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
    readonly seats: FieldRef<"Car", 'Int'>
    readonly status: FieldRef<"Car", 'CarStatus'>
    readonly featured: FieldRef<"Car", 'Boolean'>
    readonly images: FieldRef<"Car", 'String[]'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.testDrivesBookings
   */
  export type Car$testDrivesBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    cursor?: TestDriveBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * Car.savedBy
   */
  export type Car$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    cursor?: UserSavedCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model UserSavedCar
   */

  export type AggregateUserSavedCar = {
    _count: UserSavedCarCountAggregateOutputType | null
    _min: UserSavedCarMinAggregateOutputType | null
    _max: UserSavedCarMaxAggregateOutputType | null
  }

  export type UserSavedCarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    savedAt: Date | null
  }

  export type UserSavedCarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    savedAt: Date | null
  }

  export type UserSavedCarCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    savedAt: number
    _all: number
  }


  export type UserSavedCarMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
  }

  export type UserSavedCarMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
  }

  export type UserSavedCarCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
    _all?: true
  }

  export type UserSavedCarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedCar to aggregate.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSavedCars
    **/
    _count?: true | UserSavedCarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSavedCarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSavedCarMaxAggregateInputType
  }

  export type GetUserSavedCarAggregateType<T extends UserSavedCarAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSavedCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSavedCar[P]>
      : GetScalarType<T[P], AggregateUserSavedCar[P]>
  }




  export type UserSavedCarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithAggregationInput | UserSavedCarOrderByWithAggregationInput[]
    by: UserSavedCarScalarFieldEnum[] | UserSavedCarScalarFieldEnum
    having?: UserSavedCarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSavedCarCountAggregateInputType | true
    _min?: UserSavedCarMinAggregateInputType
    _max?: UserSavedCarMaxAggregateInputType
  }

  export type UserSavedCarGroupByOutputType = {
    id: string
    userId: string
    carId: string
    savedAt: Date
    _count: UserSavedCarCountAggregateOutputType | null
    _min: UserSavedCarMinAggregateOutputType | null
    _max: UserSavedCarMaxAggregateOutputType | null
  }

  type GetUserSavedCarGroupByPayload<T extends UserSavedCarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSavedCarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSavedCarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSavedCarGroupByOutputType[P]>
            : GetScalarType<T[P], UserSavedCarGroupByOutputType[P]>
        }
      >
    >


  export type UserSavedCarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
  }

  export type UserSavedCarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "savedAt", ExtArgs["result"]["userSavedCar"]>
  export type UserSavedCarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSavedCarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSavedCarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSavedCarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSavedCar"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      savedAt: Date
    }, ExtArgs["result"]["userSavedCar"]>
    composites: {}
  }

  type UserSavedCarGetPayload<S extends boolean | null | undefined | UserSavedCarDefaultArgs> = $Result.GetResult<Prisma.$UserSavedCarPayload, S>

  type UserSavedCarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSavedCarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSavedCarCountAggregateInputType | true
    }

  export interface UserSavedCarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSavedCar'], meta: { name: 'UserSavedCar' } }
    /**
     * Find zero or one UserSavedCar that matches the filter.
     * @param {UserSavedCarFindUniqueArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSavedCarFindUniqueArgs>(args: SelectSubset<T, UserSavedCarFindUniqueArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSavedCar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSavedCarFindUniqueOrThrowArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSavedCarFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSavedCarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedCar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindFirstArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSavedCarFindFirstArgs>(args?: SelectSubset<T, UserSavedCarFindFirstArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedCar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindFirstOrThrowArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSavedCarFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSavedCarFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSavedCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSavedCars
     * const userSavedCars = await prisma.userSavedCar.findMany()
     * 
     * // Get first 10 UserSavedCars
     * const userSavedCars = await prisma.userSavedCar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSavedCarFindManyArgs>(args?: SelectSubset<T, UserSavedCarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSavedCar.
     * @param {UserSavedCarCreateArgs} args - Arguments to create a UserSavedCar.
     * @example
     * // Create one UserSavedCar
     * const UserSavedCar = await prisma.userSavedCar.create({
     *   data: {
     *     // ... data to create a UserSavedCar
     *   }
     * })
     * 
     */
    create<T extends UserSavedCarCreateArgs>(args: SelectSubset<T, UserSavedCarCreateArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSavedCars.
     * @param {UserSavedCarCreateManyArgs} args - Arguments to create many UserSavedCars.
     * @example
     * // Create many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSavedCarCreateManyArgs>(args?: SelectSubset<T, UserSavedCarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSavedCars and returns the data saved in the database.
     * @param {UserSavedCarCreateManyAndReturnArgs} args - Arguments to create many UserSavedCars.
     * @example
     * // Create many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSavedCars and only return the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSavedCarCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSavedCarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSavedCar.
     * @param {UserSavedCarDeleteArgs} args - Arguments to delete one UserSavedCar.
     * @example
     * // Delete one UserSavedCar
     * const UserSavedCar = await prisma.userSavedCar.delete({
     *   where: {
     *     // ... filter to delete one UserSavedCar
     *   }
     * })
     * 
     */
    delete<T extends UserSavedCarDeleteArgs>(args: SelectSubset<T, UserSavedCarDeleteArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSavedCar.
     * @param {UserSavedCarUpdateArgs} args - Arguments to update one UserSavedCar.
     * @example
     * // Update one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSavedCarUpdateArgs>(args: SelectSubset<T, UserSavedCarUpdateArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSavedCars.
     * @param {UserSavedCarDeleteManyArgs} args - Arguments to filter UserSavedCars to delete.
     * @example
     * // Delete a few UserSavedCars
     * const { count } = await prisma.userSavedCar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSavedCarDeleteManyArgs>(args?: SelectSubset<T, UserSavedCarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSavedCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSavedCarUpdateManyArgs>(args: SelectSubset<T, UserSavedCarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSavedCars and returns the data updated in the database.
     * @param {UserSavedCarUpdateManyAndReturnArgs} args - Arguments to update many UserSavedCars.
     * @example
     * // Update many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSavedCars and only return the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSavedCarUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSavedCarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSavedCar.
     * @param {UserSavedCarUpsertArgs} args - Arguments to update or create a UserSavedCar.
     * @example
     * // Update or create a UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.upsert({
     *   create: {
     *     // ... data to create a UserSavedCar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSavedCar we want to update
     *   }
     * })
     */
    upsert<T extends UserSavedCarUpsertArgs>(args: SelectSubset<T, UserSavedCarUpsertArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSavedCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarCountArgs} args - Arguments to filter UserSavedCars to count.
     * @example
     * // Count the number of UserSavedCars
     * const count = await prisma.userSavedCar.count({
     *   where: {
     *     // ... the filter for the UserSavedCars we want to count
     *   }
     * })
    **/
    count<T extends UserSavedCarCountArgs>(
      args?: Subset<T, UserSavedCarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSavedCarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSavedCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSavedCarAggregateArgs>(args: Subset<T, UserSavedCarAggregateArgs>): Prisma.PrismaPromise<GetUserSavedCarAggregateType<T>>

    /**
     * Group by UserSavedCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSavedCarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSavedCarGroupByArgs['orderBy'] }
        : { orderBy?: UserSavedCarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSavedCarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSavedCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSavedCar model
   */
  readonly fields: UserSavedCarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSavedCar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSavedCarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSavedCar model
   */
  interface UserSavedCarFieldRefs {
    readonly id: FieldRef<"UserSavedCar", 'String'>
    readonly userId: FieldRef<"UserSavedCar", 'String'>
    readonly carId: FieldRef<"UserSavedCar", 'String'>
    readonly savedAt: FieldRef<"UserSavedCar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSavedCar findUnique
   */
  export type UserSavedCarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar findUniqueOrThrow
   */
  export type UserSavedCarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar findFirst
   */
  export type UserSavedCarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedCars.
     */
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar findFirstOrThrow
   */
  export type UserSavedCarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedCars.
     */
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar findMany
   */
  export type UserSavedCarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCars to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar create
   */
  export type UserSavedCarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSavedCar.
     */
    data: XOR<UserSavedCarCreateInput, UserSavedCarUncheckedCreateInput>
  }

  /**
   * UserSavedCar createMany
   */
  export type UserSavedCarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSavedCars.
     */
    data: UserSavedCarCreateManyInput | UserSavedCarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSavedCar createManyAndReturn
   */
  export type UserSavedCarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * The data used to create many UserSavedCars.
     */
    data: UserSavedCarCreateManyInput | UserSavedCarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSavedCar update
   */
  export type UserSavedCarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSavedCar.
     */
    data: XOR<UserSavedCarUpdateInput, UserSavedCarUncheckedUpdateInput>
    /**
     * Choose, which UserSavedCar to update.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar updateMany
   */
  export type UserSavedCarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSavedCars.
     */
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyInput>
    /**
     * Filter which UserSavedCars to update
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to update.
     */
    limit?: number
  }

  /**
   * UserSavedCar updateManyAndReturn
   */
  export type UserSavedCarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * The data used to update UserSavedCars.
     */
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyInput>
    /**
     * Filter which UserSavedCars to update
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSavedCar upsert
   */
  export type UserSavedCarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSavedCar to update in case it exists.
     */
    where: UserSavedCarWhereUniqueInput
    /**
     * In case the UserSavedCar found by the `where` argument doesn't exist, create a new UserSavedCar with this data.
     */
    create: XOR<UserSavedCarCreateInput, UserSavedCarUncheckedCreateInput>
    /**
     * In case the UserSavedCar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSavedCarUpdateInput, UserSavedCarUncheckedUpdateInput>
  }

  /**
   * UserSavedCar delete
   */
  export type UserSavedCarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter which UserSavedCar to delete.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar deleteMany
   */
  export type UserSavedCarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedCars to delete
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to delete.
     */
    limit?: number
  }

  /**
   * UserSavedCar without action
   */
  export type UserSavedCarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
  }


  /**
   * Model TestDriveBooking
   */

  export type AggregateTestDriveBooking = {
    _count: TestDriveBookingCountAggregateOutputType | null
    _min: TestDriveBookingMinAggregateOutputType | null
    _max: TestDriveBookingMaxAggregateOutputType | null
  }

  export type TestDriveBookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    bookingDate: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestDriveBookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    bookingDate: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestDriveBookingCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    bookingDate: number
    startTime: number
    endTime: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestDriveBookingMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestDriveBookingMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestDriveBookingCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestDriveBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDriveBooking to aggregate.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestDriveBookings
    **/
    _count?: true | TestDriveBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestDriveBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestDriveBookingMaxAggregateInputType
  }

  export type GetTestDriveBookingAggregateType<T extends TestDriveBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateTestDriveBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestDriveBooking[P]>
      : GetScalarType<T[P], AggregateTestDriveBooking[P]>
  }




  export type TestDriveBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithAggregationInput | TestDriveBookingOrderByWithAggregationInput[]
    by: TestDriveBookingScalarFieldEnum[] | TestDriveBookingScalarFieldEnum
    having?: TestDriveBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestDriveBookingCountAggregateInputType | true
    _min?: TestDriveBookingMinAggregateInputType
    _max?: TestDriveBookingMaxAggregateInputType
  }

  export type TestDriveBookingGroupByOutputType = {
    id: string
    userId: string
    carId: string
    bookingDate: Date
    startTime: string
    endTime: string
    status: $Enums.BookingStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestDriveBookingCountAggregateOutputType | null
    _min: TestDriveBookingMinAggregateOutputType | null
    _max: TestDriveBookingMaxAggregateOutputType | null
  }

  type GetTestDriveBookingGroupByPayload<T extends TestDriveBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestDriveBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestDriveBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestDriveBookingGroupByOutputType[P]>
            : GetScalarType<T[P], TestDriveBookingGroupByOutputType[P]>
        }
      >
    >


  export type TestDriveBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestDriveBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "bookingDate" | "startTime" | "endTime" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["testDriveBooking"]>
  export type TestDriveBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestDriveBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestDriveBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestDriveBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestDriveBooking"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      bookingDate: Date
      startTime: string
      endTime: string
      status: $Enums.BookingStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testDriveBooking"]>
    composites: {}
  }

  type TestDriveBookingGetPayload<S extends boolean | null | undefined | TestDriveBookingDefaultArgs> = $Result.GetResult<Prisma.$TestDriveBookingPayload, S>

  type TestDriveBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestDriveBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestDriveBookingCountAggregateInputType | true
    }

  export interface TestDriveBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestDriveBooking'], meta: { name: 'TestDriveBooking' } }
    /**
     * Find zero or one TestDriveBooking that matches the filter.
     * @param {TestDriveBookingFindUniqueArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestDriveBookingFindUniqueArgs>(args: SelectSubset<T, TestDriveBookingFindUniqueArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestDriveBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestDriveBookingFindUniqueOrThrowArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestDriveBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, TestDriveBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDriveBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindFirstArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestDriveBookingFindFirstArgs>(args?: SelectSubset<T, TestDriveBookingFindFirstArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDriveBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindFirstOrThrowArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestDriveBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, TestDriveBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestDriveBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestDriveBookings
     * const testDriveBookings = await prisma.testDriveBooking.findMany()
     * 
     * // Get first 10 TestDriveBookings
     * const testDriveBookings = await prisma.testDriveBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestDriveBookingFindManyArgs>(args?: SelectSubset<T, TestDriveBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestDriveBooking.
     * @param {TestDriveBookingCreateArgs} args - Arguments to create a TestDriveBooking.
     * @example
     * // Create one TestDriveBooking
     * const TestDriveBooking = await prisma.testDriveBooking.create({
     *   data: {
     *     // ... data to create a TestDriveBooking
     *   }
     * })
     * 
     */
    create<T extends TestDriveBookingCreateArgs>(args: SelectSubset<T, TestDriveBookingCreateArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestDriveBookings.
     * @param {TestDriveBookingCreateManyArgs} args - Arguments to create many TestDriveBookings.
     * @example
     * // Create many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestDriveBookingCreateManyArgs>(args?: SelectSubset<T, TestDriveBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestDriveBookings and returns the data saved in the database.
     * @param {TestDriveBookingCreateManyAndReturnArgs} args - Arguments to create many TestDriveBookings.
     * @example
     * // Create many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestDriveBookings and only return the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestDriveBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, TestDriveBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestDriveBooking.
     * @param {TestDriveBookingDeleteArgs} args - Arguments to delete one TestDriveBooking.
     * @example
     * // Delete one TestDriveBooking
     * const TestDriveBooking = await prisma.testDriveBooking.delete({
     *   where: {
     *     // ... filter to delete one TestDriveBooking
     *   }
     * })
     * 
     */
    delete<T extends TestDriveBookingDeleteArgs>(args: SelectSubset<T, TestDriveBookingDeleteArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestDriveBooking.
     * @param {TestDriveBookingUpdateArgs} args - Arguments to update one TestDriveBooking.
     * @example
     * // Update one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestDriveBookingUpdateArgs>(args: SelectSubset<T, TestDriveBookingUpdateArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestDriveBookings.
     * @param {TestDriveBookingDeleteManyArgs} args - Arguments to filter TestDriveBookings to delete.
     * @example
     * // Delete a few TestDriveBookings
     * const { count } = await prisma.testDriveBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDriveBookingDeleteManyArgs>(args?: SelectSubset<T, TestDriveBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDriveBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestDriveBookingUpdateManyArgs>(args: SelectSubset<T, TestDriveBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDriveBookings and returns the data updated in the database.
     * @param {TestDriveBookingUpdateManyAndReturnArgs} args - Arguments to update many TestDriveBookings.
     * @example
     * // Update many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestDriveBookings and only return the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestDriveBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, TestDriveBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestDriveBooking.
     * @param {TestDriveBookingUpsertArgs} args - Arguments to update or create a TestDriveBooking.
     * @example
     * // Update or create a TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.upsert({
     *   create: {
     *     // ... data to create a TestDriveBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestDriveBooking we want to update
     *   }
     * })
     */
    upsert<T extends TestDriveBookingUpsertArgs>(args: SelectSubset<T, TestDriveBookingUpsertArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestDriveBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingCountArgs} args - Arguments to filter TestDriveBookings to count.
     * @example
     * // Count the number of TestDriveBookings
     * const count = await prisma.testDriveBooking.count({
     *   where: {
     *     // ... the filter for the TestDriveBookings we want to count
     *   }
     * })
    **/
    count<T extends TestDriveBookingCountArgs>(
      args?: Subset<T, TestDriveBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestDriveBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestDriveBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestDriveBookingAggregateArgs>(args: Subset<T, TestDriveBookingAggregateArgs>): Prisma.PrismaPromise<GetTestDriveBookingAggregateType<T>>

    /**
     * Group by TestDriveBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestDriveBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestDriveBookingGroupByArgs['orderBy'] }
        : { orderBy?: TestDriveBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestDriveBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestDriveBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestDriveBooking model
   */
  readonly fields: TestDriveBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestDriveBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestDriveBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestDriveBooking model
   */
  interface TestDriveBookingFieldRefs {
    readonly id: FieldRef<"TestDriveBooking", 'String'>
    readonly userId: FieldRef<"TestDriveBooking", 'String'>
    readonly carId: FieldRef<"TestDriveBooking", 'String'>
    readonly bookingDate: FieldRef<"TestDriveBooking", 'DateTime'>
    readonly startTime: FieldRef<"TestDriveBooking", 'String'>
    readonly endTime: FieldRef<"TestDriveBooking", 'String'>
    readonly status: FieldRef<"TestDriveBooking", 'BookingStatus'>
    readonly notes: FieldRef<"TestDriveBooking", 'String'>
    readonly createdAt: FieldRef<"TestDriveBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"TestDriveBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestDriveBooking findUnique
   */
  export type TestDriveBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking findUniqueOrThrow
   */
  export type TestDriveBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking findFirst
   */
  export type TestDriveBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDriveBookings.
     */
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking findFirstOrThrow
   */
  export type TestDriveBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDriveBookings.
     */
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking findMany
   */
  export type TestDriveBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBookings to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking create
   */
  export type TestDriveBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a TestDriveBooking.
     */
    data: XOR<TestDriveBookingCreateInput, TestDriveBookingUncheckedCreateInput>
  }

  /**
   * TestDriveBooking createMany
   */
  export type TestDriveBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestDriveBookings.
     */
    data: TestDriveBookingCreateManyInput | TestDriveBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestDriveBooking createManyAndReturn
   */
  export type TestDriveBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * The data used to create many TestDriveBookings.
     */
    data: TestDriveBookingCreateManyInput | TestDriveBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDriveBooking update
   */
  export type TestDriveBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a TestDriveBooking.
     */
    data: XOR<TestDriveBookingUpdateInput, TestDriveBookingUncheckedUpdateInput>
    /**
     * Choose, which TestDriveBooking to update.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking updateMany
   */
  export type TestDriveBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestDriveBookings.
     */
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyInput>
    /**
     * Filter which TestDriveBookings to update
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to update.
     */
    limit?: number
  }

  /**
   * TestDriveBooking updateManyAndReturn
   */
  export type TestDriveBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * The data used to update TestDriveBookings.
     */
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyInput>
    /**
     * Filter which TestDriveBookings to update
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDriveBooking upsert
   */
  export type TestDriveBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the TestDriveBooking to update in case it exists.
     */
    where: TestDriveBookingWhereUniqueInput
    /**
     * In case the TestDriveBooking found by the `where` argument doesn't exist, create a new TestDriveBooking with this data.
     */
    create: XOR<TestDriveBookingCreateInput, TestDriveBookingUncheckedCreateInput>
    /**
     * In case the TestDriveBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestDriveBookingUpdateInput, TestDriveBookingUncheckedUpdateInput>
  }

  /**
   * TestDriveBooking delete
   */
  export type TestDriveBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter which TestDriveBooking to delete.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking deleteMany
   */
  export type TestDriveBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDriveBookings to delete
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to delete.
     */
    limit?: number
  }

  /**
   * TestDriveBooking without action
   */
  export type TestDriveBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
  }


  /**
   * Model DealershipInfo
   */

  export type AggregateDealershipInfo = {
    _count: DealershipInfoCountAggregateOutputType | null
    _min: DealershipInfoMinAggregateOutputType | null
    _max: DealershipInfoMaxAggregateOutputType | null
  }

  export type DealershipInfoMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealershipInfoMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealershipInfoCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DealershipInfoMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealershipInfoMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealershipInfoCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DealershipInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealershipInfo to aggregate.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealershipInfos
    **/
    _count?: true | DealershipInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealershipInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealershipInfoMaxAggregateInputType
  }

  export type GetDealershipInfoAggregateType<T extends DealershipInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDealershipInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealershipInfo[P]>
      : GetScalarType<T[P], AggregateDealershipInfo[P]>
  }




  export type DealershipInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealershipInfoWhereInput
    orderBy?: DealershipInfoOrderByWithAggregationInput | DealershipInfoOrderByWithAggregationInput[]
    by: DealershipInfoScalarFieldEnum[] | DealershipInfoScalarFieldEnum
    having?: DealershipInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealershipInfoCountAggregateInputType | true
    _min?: DealershipInfoMinAggregateInputType
    _max?: DealershipInfoMaxAggregateInputType
  }

  export type DealershipInfoGroupByOutputType = {
    id: string
    email: string
    name: string
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: DealershipInfoCountAggregateOutputType | null
    _min: DealershipInfoMinAggregateOutputType | null
    _max: DealershipInfoMaxAggregateOutputType | null
  }

  type GetDealershipInfoGroupByPayload<T extends DealershipInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealershipInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealershipInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealershipInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DealershipInfoGroupByOutputType[P]>
        }
      >
    >


  export type DealershipInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workingHours?: boolean | DealershipInfo$workingHoursArgs<ExtArgs>
    _count?: boolean | DealershipInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DealershipInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["dealershipInfo"]>
  export type DealershipInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | DealershipInfo$workingHoursArgs<ExtArgs>
    _count?: boolean | DealershipInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealershipInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DealershipInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DealershipInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealershipInfo"
    objects: {
      workingHours: Prisma.$WorkingHoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      phone: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dealershipInfo"]>
    composites: {}
  }

  type DealershipInfoGetPayload<S extends boolean | null | undefined | DealershipInfoDefaultArgs> = $Result.GetResult<Prisma.$DealershipInfoPayload, S>

  type DealershipInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealershipInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealershipInfoCountAggregateInputType | true
    }

  export interface DealershipInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealershipInfo'], meta: { name: 'DealershipInfo' } }
    /**
     * Find zero or one DealershipInfo that matches the filter.
     * @param {DealershipInfoFindUniqueArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealershipInfoFindUniqueArgs>(args: SelectSubset<T, DealershipInfoFindUniqueArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DealershipInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealershipInfoFindUniqueOrThrowArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealershipInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, DealershipInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealershipInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindFirstArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealershipInfoFindFirstArgs>(args?: SelectSubset<T, DealershipInfoFindFirstArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealershipInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindFirstOrThrowArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealershipInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, DealershipInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DealershipInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealershipInfos
     * const dealershipInfos = await prisma.dealershipInfo.findMany()
     * 
     * // Get first 10 DealershipInfos
     * const dealershipInfos = await prisma.dealershipInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealershipInfoFindManyArgs>(args?: SelectSubset<T, DealershipInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DealershipInfo.
     * @param {DealershipInfoCreateArgs} args - Arguments to create a DealershipInfo.
     * @example
     * // Create one DealershipInfo
     * const DealershipInfo = await prisma.dealershipInfo.create({
     *   data: {
     *     // ... data to create a DealershipInfo
     *   }
     * })
     * 
     */
    create<T extends DealershipInfoCreateArgs>(args: SelectSubset<T, DealershipInfoCreateArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DealershipInfos.
     * @param {DealershipInfoCreateManyArgs} args - Arguments to create many DealershipInfos.
     * @example
     * // Create many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealershipInfoCreateManyArgs>(args?: SelectSubset<T, DealershipInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealershipInfos and returns the data saved in the database.
     * @param {DealershipInfoCreateManyAndReturnArgs} args - Arguments to create many DealershipInfos.
     * @example
     * // Create many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealershipInfos and only return the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealershipInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, DealershipInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DealershipInfo.
     * @param {DealershipInfoDeleteArgs} args - Arguments to delete one DealershipInfo.
     * @example
     * // Delete one DealershipInfo
     * const DealershipInfo = await prisma.dealershipInfo.delete({
     *   where: {
     *     // ... filter to delete one DealershipInfo
     *   }
     * })
     * 
     */
    delete<T extends DealershipInfoDeleteArgs>(args: SelectSubset<T, DealershipInfoDeleteArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DealershipInfo.
     * @param {DealershipInfoUpdateArgs} args - Arguments to update one DealershipInfo.
     * @example
     * // Update one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealershipInfoUpdateArgs>(args: SelectSubset<T, DealershipInfoUpdateArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DealershipInfos.
     * @param {DealershipInfoDeleteManyArgs} args - Arguments to filter DealershipInfos to delete.
     * @example
     * // Delete a few DealershipInfos
     * const { count } = await prisma.dealershipInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealershipInfoDeleteManyArgs>(args?: SelectSubset<T, DealershipInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealershipInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealershipInfoUpdateManyArgs>(args: SelectSubset<T, DealershipInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealershipInfos and returns the data updated in the database.
     * @param {DealershipInfoUpdateManyAndReturnArgs} args - Arguments to update many DealershipInfos.
     * @example
     * // Update many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DealershipInfos and only return the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealershipInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, DealershipInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DealershipInfo.
     * @param {DealershipInfoUpsertArgs} args - Arguments to update or create a DealershipInfo.
     * @example
     * // Update or create a DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.upsert({
     *   create: {
     *     // ... data to create a DealershipInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealershipInfo we want to update
     *   }
     * })
     */
    upsert<T extends DealershipInfoUpsertArgs>(args: SelectSubset<T, DealershipInfoUpsertArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DealershipInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoCountArgs} args - Arguments to filter DealershipInfos to count.
     * @example
     * // Count the number of DealershipInfos
     * const count = await prisma.dealershipInfo.count({
     *   where: {
     *     // ... the filter for the DealershipInfos we want to count
     *   }
     * })
    **/
    count<T extends DealershipInfoCountArgs>(
      args?: Subset<T, DealershipInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealershipInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealershipInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealershipInfoAggregateArgs>(args: Subset<T, DealershipInfoAggregateArgs>): Prisma.PrismaPromise<GetDealershipInfoAggregateType<T>>

    /**
     * Group by DealershipInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealershipInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealershipInfoGroupByArgs['orderBy'] }
        : { orderBy?: DealershipInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealershipInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealershipInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealershipInfo model
   */
  readonly fields: DealershipInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealershipInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealershipInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workingHours<T extends DealershipInfo$workingHoursArgs<ExtArgs> = {}>(args?: Subset<T, DealershipInfo$workingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DealershipInfo model
   */
  interface DealershipInfoFieldRefs {
    readonly id: FieldRef<"DealershipInfo", 'String'>
    readonly email: FieldRef<"DealershipInfo", 'String'>
    readonly name: FieldRef<"DealershipInfo", 'String'>
    readonly phone: FieldRef<"DealershipInfo", 'String'>
    readonly address: FieldRef<"DealershipInfo", 'String'>
    readonly createdAt: FieldRef<"DealershipInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"DealershipInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DealershipInfo findUnique
   */
  export type DealershipInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo findUniqueOrThrow
   */
  export type DealershipInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo findFirst
   */
  export type DealershipInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealershipInfos.
     */
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo findFirstOrThrow
   */
  export type DealershipInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealershipInfos.
     */
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo findMany
   */
  export type DealershipInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfos to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo create
   */
  export type DealershipInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DealershipInfo.
     */
    data: XOR<DealershipInfoCreateInput, DealershipInfoUncheckedCreateInput>
  }

  /**
   * DealershipInfo createMany
   */
  export type DealershipInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealershipInfos.
     */
    data: DealershipInfoCreateManyInput | DealershipInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealershipInfo createManyAndReturn
   */
  export type DealershipInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * The data used to create many DealershipInfos.
     */
    data: DealershipInfoCreateManyInput | DealershipInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealershipInfo update
   */
  export type DealershipInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DealershipInfo.
     */
    data: XOR<DealershipInfoUpdateInput, DealershipInfoUncheckedUpdateInput>
    /**
     * Choose, which DealershipInfo to update.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo updateMany
   */
  export type DealershipInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealershipInfos.
     */
    data: XOR<DealershipInfoUpdateManyMutationInput, DealershipInfoUncheckedUpdateManyInput>
    /**
     * Filter which DealershipInfos to update
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to update.
     */
    limit?: number
  }

  /**
   * DealershipInfo updateManyAndReturn
   */
  export type DealershipInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * The data used to update DealershipInfos.
     */
    data: XOR<DealershipInfoUpdateManyMutationInput, DealershipInfoUncheckedUpdateManyInput>
    /**
     * Filter which DealershipInfos to update
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to update.
     */
    limit?: number
  }

  /**
   * DealershipInfo upsert
   */
  export type DealershipInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DealershipInfo to update in case it exists.
     */
    where: DealershipInfoWhereUniqueInput
    /**
     * In case the DealershipInfo found by the `where` argument doesn't exist, create a new DealershipInfo with this data.
     */
    create: XOR<DealershipInfoCreateInput, DealershipInfoUncheckedCreateInput>
    /**
     * In case the DealershipInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealershipInfoUpdateInput, DealershipInfoUncheckedUpdateInput>
  }

  /**
   * DealershipInfo delete
   */
  export type DealershipInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter which DealershipInfo to delete.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo deleteMany
   */
  export type DealershipInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealershipInfos to delete
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to delete.
     */
    limit?: number
  }

  /**
   * DealershipInfo.workingHours
   */
  export type DealershipInfo$workingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    where?: WorkingHoursWhereInput
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    cursor?: WorkingHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * DealershipInfo without action
   */
  export type DealershipInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
  }


  /**
   * Model WorkingHours
   */

  export type AggregateWorkingHours = {
    _count: WorkingHoursCountAggregateOutputType | null
    _min: WorkingHoursMinAggregateOutputType | null
    _max: WorkingHoursMaxAggregateOutputType | null
  }

  export type WorkingHoursMinAggregateOutputType = {
    id: string | null
    dealershipId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHoursMaxAggregateOutputType = {
    id: string | null
    dealershipId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHoursCountAggregateOutputType = {
    id: number
    dealershipId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    isOpen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkingHoursMinAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingHoursMaxAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingHoursCountAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkingHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to aggregate.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingHours
    **/
    _count?: true | WorkingHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingHoursMaxAggregateInputType
  }

  export type GetWorkingHoursAggregateType<T extends WorkingHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingHours[P]>
      : GetScalarType<T[P], AggregateWorkingHours[P]>
  }




  export type WorkingHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHoursWhereInput
    orderBy?: WorkingHoursOrderByWithAggregationInput | WorkingHoursOrderByWithAggregationInput[]
    by: WorkingHoursScalarFieldEnum[] | WorkingHoursScalarFieldEnum
    having?: WorkingHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingHoursCountAggregateInputType | true
    _min?: WorkingHoursMinAggregateInputType
    _max?: WorkingHoursMaxAggregateInputType
  }

  export type WorkingHoursGroupByOutputType = {
    id: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkingHoursCountAggregateOutputType | null
    _min: WorkingHoursMinAggregateOutputType | null
    _max: WorkingHoursMaxAggregateOutputType | null
  }

  type GetWorkingHoursGroupByPayload<T extends WorkingHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingHoursGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingHoursGroupByOutputType[P]>
        }
      >
    >


  export type WorkingHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHours"]>

  export type WorkingHoursSelectScalar = {
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkingHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dealershipId" | "dayOfWeek" | "openTime" | "closeTime" | "isOpen" | "createdAt" | "updatedAt", ExtArgs["result"]["workingHours"]>
  export type WorkingHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }
  export type WorkingHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }
  export type WorkingHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }

  export type $WorkingHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingHours"
    objects: {
      dealership: Prisma.$DealershipInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealershipId: string
      dayOfWeek: $Enums.DayOfWeek
      openTime: string
      closeTime: string
      isOpen: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workingHours"]>
    composites: {}
  }

  type WorkingHoursGetPayload<S extends boolean | null | undefined | WorkingHoursDefaultArgs> = $Result.GetResult<Prisma.$WorkingHoursPayload, S>

  type WorkingHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingHoursCountAggregateInputType | true
    }

  export interface WorkingHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingHours'], meta: { name: 'WorkingHours' } }
    /**
     * Find zero or one WorkingHours that matches the filter.
     * @param {WorkingHoursFindUniqueArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingHoursFindUniqueArgs>(args: SelectSubset<T, WorkingHoursFindUniqueArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingHoursFindUniqueOrThrowArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindFirstArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingHoursFindFirstArgs>(args?: SelectSubset<T, WorkingHoursFindFirstArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindFirstOrThrowArgs} args - Arguments to find a WorkingHours
     * @example
     * // Get one WorkingHours
     * const workingHours = await prisma.workingHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingHours
     * const workingHours = await prisma.workingHours.findMany()
     * 
     * // Get first 10 WorkingHours
     * const workingHours = await prisma.workingHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingHoursFindManyArgs>(args?: SelectSubset<T, WorkingHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingHours.
     * @param {WorkingHoursCreateArgs} args - Arguments to create a WorkingHours.
     * @example
     * // Create one WorkingHours
     * const WorkingHours = await prisma.workingHours.create({
     *   data: {
     *     // ... data to create a WorkingHours
     *   }
     * })
     * 
     */
    create<T extends WorkingHoursCreateArgs>(args: SelectSubset<T, WorkingHoursCreateArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingHours.
     * @param {WorkingHoursCreateManyArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHours = await prisma.workingHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingHoursCreateManyArgs>(args?: SelectSubset<T, WorkingHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingHours and returns the data saved in the database.
     * @param {WorkingHoursCreateManyAndReturnArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHours = await prisma.workingHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingHours and only return the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingHours.
     * @param {WorkingHoursDeleteArgs} args - Arguments to delete one WorkingHours.
     * @example
     * // Delete one WorkingHours
     * const WorkingHours = await prisma.workingHours.delete({
     *   where: {
     *     // ... filter to delete one WorkingHours
     *   }
     * })
     * 
     */
    delete<T extends WorkingHoursDeleteArgs>(args: SelectSubset<T, WorkingHoursDeleteArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingHours.
     * @param {WorkingHoursUpdateArgs} args - Arguments to update one WorkingHours.
     * @example
     * // Update one WorkingHours
     * const workingHours = await prisma.workingHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingHoursUpdateArgs>(args: SelectSubset<T, WorkingHoursUpdateArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingHours.
     * @param {WorkingHoursDeleteManyArgs} args - Arguments to filter WorkingHours to delete.
     * @example
     * // Delete a few WorkingHours
     * const { count } = await prisma.workingHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingHoursDeleteManyArgs>(args?: SelectSubset<T, WorkingHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingHours
     * const workingHours = await prisma.workingHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingHoursUpdateManyArgs>(args: SelectSubset<T, WorkingHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours and returns the data updated in the database.
     * @param {WorkingHoursUpdateManyAndReturnArgs} args - Arguments to update many WorkingHours.
     * @example
     * // Update many WorkingHours
     * const workingHours = await prisma.workingHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingHours and only return the `id`
     * const workingHoursWithIdOnly = await prisma.workingHours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkingHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingHours.
     * @param {WorkingHoursUpsertArgs} args - Arguments to update or create a WorkingHours.
     * @example
     * // Update or create a WorkingHours
     * const workingHours = await prisma.workingHours.upsert({
     *   create: {
     *     // ... data to create a WorkingHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingHours we want to update
     *   }
     * })
     */
    upsert<T extends WorkingHoursUpsertArgs>(args: SelectSubset<T, WorkingHoursUpsertArgs<ExtArgs>>): Prisma__WorkingHoursClient<$Result.GetResult<Prisma.$WorkingHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursCountArgs} args - Arguments to filter WorkingHours to count.
     * @example
     * // Count the number of WorkingHours
     * const count = await prisma.workingHours.count({
     *   where: {
     *     // ... the filter for the WorkingHours we want to count
     *   }
     * })
    **/
    count<T extends WorkingHoursCountArgs>(
      args?: Subset<T, WorkingHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkingHoursAggregateArgs>(args: Subset<T, WorkingHoursAggregateArgs>): Prisma.PrismaPromise<GetWorkingHoursAggregateType<T>>

    /**
     * Group by WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkingHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingHoursGroupByArgs['orderBy'] }
        : { orderBy?: WorkingHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkingHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingHours model
   */
  readonly fields: WorkingHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealership<T extends DealershipInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealershipInfoDefaultArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkingHours model
   */
  interface WorkingHoursFieldRefs {
    readonly id: FieldRef<"WorkingHours", 'String'>
    readonly dealershipId: FieldRef<"WorkingHours", 'String'>
    readonly dayOfWeek: FieldRef<"WorkingHours", 'DayOfWeek'>
    readonly openTime: FieldRef<"WorkingHours", 'String'>
    readonly closeTime: FieldRef<"WorkingHours", 'String'>
    readonly isOpen: FieldRef<"WorkingHours", 'Boolean'>
    readonly createdAt: FieldRef<"WorkingHours", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkingHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkingHours findUnique
   */
  export type WorkingHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours findUniqueOrThrow
   */
  export type WorkingHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours findFirst
   */
  export type WorkingHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours findFirstOrThrow
   */
  export type WorkingHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours findMany
   */
  export type WorkingHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHoursOrderByWithRelationInput | WorkingHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingHours.
     */
    cursor?: WorkingHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    distinct?: WorkingHoursScalarFieldEnum | WorkingHoursScalarFieldEnum[]
  }

  /**
   * WorkingHours create
   */
  export type WorkingHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingHours.
     */
    data: XOR<WorkingHoursCreateInput, WorkingHoursUncheckedCreateInput>
  }

  /**
   * WorkingHours createMany
   */
  export type WorkingHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHoursCreateManyInput | WorkingHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkingHours createManyAndReturn
   */
  export type WorkingHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHoursCreateManyInput | WorkingHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHours update
   */
  export type WorkingHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingHours.
     */
    data: XOR<WorkingHoursUpdateInput, WorkingHoursUncheckedUpdateInput>
    /**
     * Choose, which WorkingHours to update.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours updateMany
   */
  export type WorkingHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
  }

  /**
   * WorkingHours updateManyAndReturn
   */
  export type WorkingHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHours upsert
   */
  export type WorkingHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingHours to update in case it exists.
     */
    where: WorkingHoursWhereUniqueInput
    /**
     * In case the WorkingHours found by the `where` argument doesn't exist, create a new WorkingHours with this data.
     */
    create: XOR<WorkingHoursCreateInput, WorkingHoursUncheckedCreateInput>
    /**
     * In case the WorkingHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingHoursUpdateInput, WorkingHoursUncheckedUpdateInput>
  }

  /**
   * WorkingHours delete
   */
  export type WorkingHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
    /**
     * Filter which WorkingHours to delete.
     */
    where: WorkingHoursWhereUniqueInput
  }

  /**
   * WorkingHours deleteMany
   */
  export type WorkingHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to delete
     */
    where?: WorkingHoursWhereInput
    /**
     * Limit how many WorkingHours to delete.
     */
    limit?: number
  }

  /**
   * WorkingHours without action
   */
  export type WorkingHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHours
     */
    select?: WorkingHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHours
     */
    omit?: WorkingHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHoursInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    price: 'price',
    mileage: 'mileage',
    color: 'color',
    fuelType: 'fuelType',
    bodyType: 'bodyType',
    transmission: 'transmission',
    description: 'description',
    seats: 'seats',
    status: 'status',
    featured: 'featured',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const UserSavedCarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    savedAt: 'savedAt'
  };

  export type UserSavedCarScalarFieldEnum = (typeof UserSavedCarScalarFieldEnum)[keyof typeof UserSavedCarScalarFieldEnum]


  export const TestDriveBookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    bookingDate: 'bookingDate',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestDriveBookingScalarFieldEnum = (typeof TestDriveBookingScalarFieldEnum)[keyof typeof TestDriveBookingScalarFieldEnum]


  export const DealershipInfoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DealershipInfoScalarFieldEnum = (typeof DealershipInfoScalarFieldEnum)[keyof typeof DealershipInfoScalarFieldEnum]


  export const WorkingHoursScalarFieldEnum: {
    id: 'id',
    dealershipId: 'dealershipId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isOpen: 'isOpen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkingHoursScalarFieldEnum = (typeof WorkingHoursScalarFieldEnum)[keyof typeof WorkingHoursScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CarStatus'
   */
  export type EnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus'>
    


  /**
   * Reference to a field of type 'CarStatus[]'
   */
  export type ListEnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    testDrives?: TestDriveBookingListRelationFilter
    savedCars?: UserSavedCarListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    testDrives?: TestDriveBookingOrderByRelationAggregateInput
    savedCars?: UserSavedCarOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    testDrives?: TestDriveBookingListRelationFilter
    savedCars?: UserSavedCarListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: DecimalFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Car"> | number
    color?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    seats?: IntNullableFilter<"Car"> | number | null
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    testDrivesBookings?: TestDriveBookingListRelationFilter
    savedBy?: UserSavedCarListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    bodyType?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    seats?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testDrivesBookings?: TestDriveBookingOrderByRelationAggregateInput
    savedBy?: UserSavedCarOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: DecimalFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Car"> | number
    color?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    description?: StringFilter<"Car"> | string
    seats?: IntNullableFilter<"Car"> | number | null
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    testDrivesBookings?: TestDriveBookingListRelationFilter
    savedBy?: UserSavedCarListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    bodyType?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    seats?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    make?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    price?: DecimalWithAggregatesFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntWithAggregatesFilter<"Car"> | number
    color?: StringWithAggregatesFilter<"Car"> | string
    fuelType?: StringWithAggregatesFilter<"Car"> | string
    bodyType?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    description?: StringWithAggregatesFilter<"Car"> | string
    seats?: IntNullableWithAggregatesFilter<"Car"> | number | null
    status?: EnumCarStatusWithAggregatesFilter<"Car"> | $Enums.CarStatus
    featured?: BoolWithAggregatesFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type UserSavedCarWhereInput = {
    AND?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    OR?: UserSavedCarWhereInput[]
    NOT?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    id?: StringFilter<"UserSavedCar"> | string
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSavedCarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserSavedCarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_carId?: UserSavedCarUserIdCarIdCompoundUniqueInput
    AND?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    OR?: UserSavedCarWhereInput[]
    NOT?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_carId">

  export type UserSavedCarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
    _count?: UserSavedCarCountOrderByAggregateInput
    _max?: UserSavedCarMaxOrderByAggregateInput
    _min?: UserSavedCarMinOrderByAggregateInput
  }

  export type UserSavedCarScalarWhereWithAggregatesInput = {
    AND?: UserSavedCarScalarWhereWithAggregatesInput | UserSavedCarScalarWhereWithAggregatesInput[]
    OR?: UserSavedCarScalarWhereWithAggregatesInput[]
    NOT?: UserSavedCarScalarWhereWithAggregatesInput | UserSavedCarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSavedCar"> | string
    userId?: StringWithAggregatesFilter<"UserSavedCar"> | string
    carId?: StringWithAggregatesFilter<"UserSavedCar"> | string
    savedAt?: DateTimeWithAggregatesFilter<"UserSavedCar"> | Date | string
  }

  export type TestDriveBookingWhereInput = {
    AND?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    OR?: TestDriveBookingWhereInput[]
    NOT?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    id?: StringFilter<"TestDriveBooking"> | string
    userId?: StringFilter<"TestDriveBooking"> | string
    carId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestDriveBookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TestDriveBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    OR?: TestDriveBookingWhereInput[]
    NOT?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    userId?: StringFilter<"TestDriveBooking"> | string
    carId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestDriveBookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestDriveBookingCountOrderByAggregateInput
    _max?: TestDriveBookingMaxOrderByAggregateInput
    _min?: TestDriveBookingMinOrderByAggregateInput
  }

  export type TestDriveBookingScalarWhereWithAggregatesInput = {
    AND?: TestDriveBookingScalarWhereWithAggregatesInput | TestDriveBookingScalarWhereWithAggregatesInput[]
    OR?: TestDriveBookingScalarWhereWithAggregatesInput[]
    NOT?: TestDriveBookingScalarWhereWithAggregatesInput | TestDriveBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    userId?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    carId?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
    startTime?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    endTime?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
  }

  export type DealershipInfoWhereInput = {
    AND?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    OR?: DealershipInfoWhereInput[]
    NOT?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    id?: StringFilter<"DealershipInfo"> | string
    email?: StringFilter<"DealershipInfo"> | string
    name?: StringFilter<"DealershipInfo"> | string
    phone?: StringFilter<"DealershipInfo"> | string
    address?: StringFilter<"DealershipInfo"> | string
    createdAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    workingHours?: WorkingHoursListRelationFilter
  }

  export type DealershipInfoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workingHours?: WorkingHoursOrderByRelationAggregateInput
  }

  export type DealershipInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    OR?: DealershipInfoWhereInput[]
    NOT?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    email?: StringFilter<"DealershipInfo"> | string
    name?: StringFilter<"DealershipInfo"> | string
    phone?: StringFilter<"DealershipInfo"> | string
    address?: StringFilter<"DealershipInfo"> | string
    createdAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    workingHours?: WorkingHoursListRelationFilter
  }, "id">

  export type DealershipInfoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DealershipInfoCountOrderByAggregateInput
    _max?: DealershipInfoMaxOrderByAggregateInput
    _min?: DealershipInfoMinOrderByAggregateInput
  }

  export type DealershipInfoScalarWhereWithAggregatesInput = {
    AND?: DealershipInfoScalarWhereWithAggregatesInput | DealershipInfoScalarWhereWithAggregatesInput[]
    OR?: DealershipInfoScalarWhereWithAggregatesInput[]
    NOT?: DealershipInfoScalarWhereWithAggregatesInput | DealershipInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealershipInfo"> | string
    email?: StringWithAggregatesFilter<"DealershipInfo"> | string
    name?: StringWithAggregatesFilter<"DealershipInfo"> | string
    phone?: StringWithAggregatesFilter<"DealershipInfo"> | string
    address?: StringWithAggregatesFilter<"DealershipInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DealershipInfo"> | Date | string
  }

  export type WorkingHoursWhereInput = {
    AND?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    OR?: WorkingHoursWhereInput[]
    NOT?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    id?: StringFilter<"WorkingHours"> | string
    dealershipId?: StringFilter<"WorkingHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHours"> | string
    closeTime?: StringFilter<"WorkingHours"> | string
    isOpen?: BoolFilter<"WorkingHours"> | boolean
    createdAt?: DateTimeFilter<"WorkingHours"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHours"> | Date | string
    dealership?: XOR<DealershipInfoScalarRelationFilter, DealershipInfoWhereInput>
  }

  export type WorkingHoursOrderByWithRelationInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dealership?: DealershipInfoOrderByWithRelationInput
  }

  export type WorkingHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dealershipId_dayOfWeek?: WorkingHoursDealershipIdDayOfWeekCompoundUniqueInput
    AND?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    OR?: WorkingHoursWhereInput[]
    NOT?: WorkingHoursWhereInput | WorkingHoursWhereInput[]
    dealershipId?: StringFilter<"WorkingHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHours"> | string
    closeTime?: StringFilter<"WorkingHours"> | string
    isOpen?: BoolFilter<"WorkingHours"> | boolean
    createdAt?: DateTimeFilter<"WorkingHours"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHours"> | Date | string
    dealership?: XOR<DealershipInfoScalarRelationFilter, DealershipInfoWhereInput>
  }, "id" | "dealershipId_dayOfWeek">

  export type WorkingHoursOrderByWithAggregationInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkingHoursCountOrderByAggregateInput
    _max?: WorkingHoursMaxOrderByAggregateInput
    _min?: WorkingHoursMinOrderByAggregateInput
  }

  export type WorkingHoursScalarWhereWithAggregatesInput = {
    AND?: WorkingHoursScalarWhereWithAggregatesInput | WorkingHoursScalarWhereWithAggregatesInput[]
    OR?: WorkingHoursScalarWhereWithAggregatesInput[]
    NOT?: WorkingHoursScalarWhereWithAggregatesInput | WorkingHoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkingHours"> | string
    dealershipId?: StringWithAggregatesFilter<"WorkingHours"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"WorkingHours"> | $Enums.DayOfWeek
    openTime?: StringWithAggregatesFilter<"WorkingHours"> | string
    closeTime?: StringWithAggregatesFilter<"WorkingHours"> | string
    isOpen?: BoolWithAggregatesFilter<"WorkingHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkingHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkingHours"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type CarCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    testDrivesBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    testDrivesBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testDrivesBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testDrivesBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarCreateInput = {
    id?: string
    savedAt?: Date | string
    car: CarCreateNestedOneWithoutSavedByInput
    user: UserCreateNestedOneWithoutSavedCarsInput
  }

  export type UserSavedCarUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSavedByNestedInput
    user?: UserUpdateOneRequiredWithoutSavedCarsNestedInput
  }

  export type UserSavedCarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarCreateManyInput = {
    id?: string
    userId: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutTestDrivesBookingsInput
    user: UserCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveBookingUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutTestDrivesBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateManyInput = {
    id?: string
    userId: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealershipInfoCreateInput = {
    id?: string
    email?: string
    name?: string
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: WorkingHoursCreateNestedManyWithoutDealershipInput
  }

  export type DealershipInfoUncheckedCreateInput = {
    id?: string
    email?: string
    name?: string
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: WorkingHoursUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type DealershipInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: WorkingHoursUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: WorkingHoursUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipInfoCreateManyInput = {
    id?: string
    email?: string
    name?: string
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealershipInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dealership: DealershipInfoCreateNestedOneWithoutWorkingHoursInput
  }

  export type WorkingHoursUncheckedCreateInput = {
    id?: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealership?: DealershipInfoUpdateOneRequiredWithoutWorkingHoursNestedInput
  }

  export type WorkingHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealershipId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursCreateManyInput = {
    id?: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealershipId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type TestDriveBookingListRelationFilter = {
    every?: TestDriveBookingWhereInput
    some?: TestDriveBookingWhereInput
    none?: TestDriveBookingWhereInput
  }

  export type UserSavedCarListRelationFilter = {
    every?: UserSavedCarWhereInput
    some?: UserSavedCarWhereInput
    none?: UserSavedCarWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestDriveBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSavedCarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    bodyType?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    bodyType?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    bodyType?: SortOrder
    transmission?: SortOrder
    description?: SortOrder
    seats?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSavedCarUserIdCarIdCompoundUniqueInput = {
    userId: string
    carId: string
  }

  export type UserSavedCarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type UserSavedCarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type UserSavedCarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type TestDriveBookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestDriveBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestDriveBookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type WorkingHoursListRelationFilter = {
    every?: WorkingHoursWhereInput
    some?: WorkingHoursWhereInput
    none?: WorkingHoursWhereInput
  }

  export type WorkingHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealershipInfoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealershipInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealershipInfoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type DealershipInfoScalarRelationFilter = {
    is?: DealershipInfoWhereInput
    isNot?: DealershipInfoWhereInput
  }

  export type WorkingHoursDealershipIdDayOfWeekCompoundUniqueInput = {
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
  }

  export type WorkingHoursCountOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingHoursMinOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type TestDriveBookingCreateNestedManyWithoutUserInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type UserSavedCarCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type UserSavedCarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type TestDriveBookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutUserInput | TestDriveBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutUserInput | TestDriveBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutUserInput | TestDriveBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type UserSavedCarUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutUserInput | UserSavedCarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutUserInput | UserSavedCarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutUserInput | UserSavedCarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutUserInput | TestDriveBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutUserInput | TestDriveBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutUserInput | TestDriveBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type UserSavedCarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutUserInput | UserSavedCarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutUserInput | UserSavedCarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutUserInput | UserSavedCarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type CarCreateimagesInput = {
    set: string[]
  }

  export type TestDriveBookingCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type UserSavedCarCreateNestedManyWithoutCarInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type UserSavedCarUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCarStatusFieldUpdateOperationsInput = {
    set?: $Enums.CarStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CarUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TestDriveBookingUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutCarInput | TestDriveBookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutCarInput | TestDriveBookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutCarInput | TestDriveBookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type UserSavedCarUpdateManyWithoutCarNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutCarInput | UserSavedCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutCarInput | UserSavedCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutCarInput | UserSavedCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutCarInput | TestDriveBookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutCarInput | TestDriveBookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutCarInput | TestDriveBookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type UserSavedCarUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutCarInput | UserSavedCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutCarInput | UserSavedCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutCarInput | UserSavedCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutSavedByInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedCarsInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput
    connect?: UserWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput
    upsert?: CarUpsertWithoutSavedByInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSavedByInput, CarUpdateWithoutSavedByInput>, CarUncheckedUpdateWithoutSavedByInput>
  }

  export type UserUpdateOneRequiredWithoutSavedCarsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput
    upsert?: UserUpsertWithoutSavedCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedCarsInput, UserUpdateWithoutSavedCarsInput>, UserUncheckedUpdateWithoutSavedCarsInput>
  }

  export type CarCreateNestedOneWithoutTestDrivesBookingsInput = {
    create?: XOR<CarCreateWithoutTestDrivesBookingsInput, CarUncheckedCreateWithoutTestDrivesBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDrivesBookingsInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestDrivesInput = {
    create?: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestDrivesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type CarUpdateOneRequiredWithoutTestDrivesBookingsNestedInput = {
    create?: XOR<CarCreateWithoutTestDrivesBookingsInput, CarUncheckedCreateWithoutTestDrivesBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDrivesBookingsInput
    upsert?: CarUpsertWithoutTestDrivesBookingsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutTestDrivesBookingsInput, CarUpdateWithoutTestDrivesBookingsInput>, CarUncheckedUpdateWithoutTestDrivesBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutTestDrivesNestedInput = {
    create?: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestDrivesInput
    upsert?: UserUpsertWithoutTestDrivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestDrivesInput, UserUpdateWithoutTestDrivesInput>, UserUncheckedUpdateWithoutTestDrivesInput>
  }

  export type WorkingHoursCreateNestedManyWithoutDealershipInput = {
    create?: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput> | WorkingHoursCreateWithoutDealershipInput[] | WorkingHoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutDealershipInput | WorkingHoursCreateOrConnectWithoutDealershipInput[]
    createMany?: WorkingHoursCreateManyDealershipInputEnvelope
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
  }

  export type WorkingHoursUncheckedCreateNestedManyWithoutDealershipInput = {
    create?: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput> | WorkingHoursCreateWithoutDealershipInput[] | WorkingHoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutDealershipInput | WorkingHoursCreateOrConnectWithoutDealershipInput[]
    createMany?: WorkingHoursCreateManyDealershipInputEnvelope
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
  }

  export type WorkingHoursUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput> | WorkingHoursCreateWithoutDealershipInput[] | WorkingHoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutDealershipInput | WorkingHoursCreateOrConnectWithoutDealershipInput[]
    upsert?: WorkingHoursUpsertWithWhereUniqueWithoutDealershipInput | WorkingHoursUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: WorkingHoursCreateManyDealershipInputEnvelope
    set?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    disconnect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    delete?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    update?: WorkingHoursUpdateWithWhereUniqueWithoutDealershipInput | WorkingHoursUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: WorkingHoursUpdateManyWithWhereWithoutDealershipInput | WorkingHoursUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
  }

  export type WorkingHoursUncheckedUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput> | WorkingHoursCreateWithoutDealershipInput[] | WorkingHoursUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHoursCreateOrConnectWithoutDealershipInput | WorkingHoursCreateOrConnectWithoutDealershipInput[]
    upsert?: WorkingHoursUpsertWithWhereUniqueWithoutDealershipInput | WorkingHoursUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: WorkingHoursCreateManyDealershipInputEnvelope
    set?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    disconnect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    delete?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    connect?: WorkingHoursWhereUniqueInput | WorkingHoursWhereUniqueInput[]
    update?: WorkingHoursUpdateWithWhereUniqueWithoutDealershipInput | WorkingHoursUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: WorkingHoursUpdateManyWithWhereWithoutDealershipInput | WorkingHoursUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
  }

  export type DealershipInfoCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: DealershipInfoCreateOrConnectWithoutWorkingHoursInput
    connect?: DealershipInfoWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type DealershipInfoUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: DealershipInfoCreateOrConnectWithoutWorkingHoursInput
    upsert?: DealershipInfoUpsertWithoutWorkingHoursInput
    connect?: DealershipInfoWhereUniqueInput
    update?: XOR<XOR<DealershipInfoUpdateToOneWithWhereWithoutWorkingHoursInput, DealershipInfoUpdateWithoutWorkingHoursInput>, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type TestDriveBookingCreateWithoutUserInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutTestDrivesBookingsInput
  }

  export type TestDriveBookingUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingCreateOrConnectWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    create: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput>
  }

  export type TestDriveBookingCreateManyUserInputEnvelope = {
    data: TestDriveBookingCreateManyUserInput | TestDriveBookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSavedCarCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    car: CarCreateNestedOneWithoutSavedByInput
  }

  export type UserSavedCarUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarCreateOrConnectWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    create: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput>
  }

  export type UserSavedCarCreateManyUserInputEnvelope = {
    data: UserSavedCarCreateManyUserInput | UserSavedCarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    update: XOR<TestDriveBookingUpdateWithoutUserInput, TestDriveBookingUncheckedUpdateWithoutUserInput>
    create: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput>
  }

  export type TestDriveBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    data: XOR<TestDriveBookingUpdateWithoutUserInput, TestDriveBookingUncheckedUpdateWithoutUserInput>
  }

  export type TestDriveBookingUpdateManyWithWhereWithoutUserInput = {
    where: TestDriveBookingScalarWhereInput
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyWithoutUserInput>
  }

  export type TestDriveBookingScalarWhereInput = {
    AND?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
    OR?: TestDriveBookingScalarWhereInput[]
    NOT?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
    id?: StringFilter<"TestDriveBooking"> | string
    userId?: StringFilter<"TestDriveBooking"> | string
    carId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
  }

  export type UserSavedCarUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    update: XOR<UserSavedCarUpdateWithoutUserInput, UserSavedCarUncheckedUpdateWithoutUserInput>
    create: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput>
  }

  export type UserSavedCarUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    data: XOR<UserSavedCarUpdateWithoutUserInput, UserSavedCarUncheckedUpdateWithoutUserInput>
  }

  export type UserSavedCarUpdateManyWithWhereWithoutUserInput = {
    where: UserSavedCarScalarWhereInput
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSavedCarScalarWhereInput = {
    AND?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
    OR?: UserSavedCarScalarWhereInput[]
    NOT?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
    id?: StringFilter<"UserSavedCar"> | string
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
  }

  export type TestDriveBookingCreateWithoutCarInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveBookingUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingCreateOrConnectWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    create: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput>
  }

  export type TestDriveBookingCreateManyCarInputEnvelope = {
    data: TestDriveBookingCreateManyCarInput | TestDriveBookingCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type UserSavedCarCreateWithoutCarInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCarsInput
  }

  export type UserSavedCarUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type UserSavedCarCreateOrConnectWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    create: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput>
  }

  export type UserSavedCarCreateManyCarInputEnvelope = {
    data: UserSavedCarCreateManyCarInput | UserSavedCarCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveBookingUpsertWithWhereUniqueWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    update: XOR<TestDriveBookingUpdateWithoutCarInput, TestDriveBookingUncheckedUpdateWithoutCarInput>
    create: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput>
  }

  export type TestDriveBookingUpdateWithWhereUniqueWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    data: XOR<TestDriveBookingUpdateWithoutCarInput, TestDriveBookingUncheckedUpdateWithoutCarInput>
  }

  export type TestDriveBookingUpdateManyWithWhereWithoutCarInput = {
    where: TestDriveBookingScalarWhereInput
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyWithoutCarInput>
  }

  export type UserSavedCarUpsertWithWhereUniqueWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    update: XOR<UserSavedCarUpdateWithoutCarInput, UserSavedCarUncheckedUpdateWithoutCarInput>
    create: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput>
  }

  export type UserSavedCarUpdateWithWhereUniqueWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    data: XOR<UserSavedCarUpdateWithoutCarInput, UserSavedCarUncheckedUpdateWithoutCarInput>
  }

  export type UserSavedCarUpdateManyWithWhereWithoutCarInput = {
    where: UserSavedCarScalarWhereInput
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyWithoutCarInput>
  }

  export type CarCreateWithoutSavedByInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    testDrivesBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSavedByInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    testDrivesBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSavedByInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
  }

  export type UserCreateWithoutSavedCarsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCarsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
  }

  export type CarUpsertWithoutSavedByInput = {
    update: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSavedByInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
  }

  export type CarUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testDrivesBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testDrivesBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutSavedCarsInput = {
    update: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
  }

  export type UserUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarCreateWithoutTestDrivesBookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTestDrivesBookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    bodyType: string
    transmission: string
    description: string
    seats?: number | null
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTestDrivesBookingsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTestDrivesBookingsInput, CarUncheckedCreateWithoutTestDrivesBookingsInput>
  }

  export type UserCreateWithoutTestDrivesInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestDrivesInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestDrivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
  }

  export type CarUpsertWithoutTestDrivesBookingsInput = {
    update: XOR<CarUpdateWithoutTestDrivesBookingsInput, CarUncheckedUpdateWithoutTestDrivesBookingsInput>
    create: XOR<CarCreateWithoutTestDrivesBookingsInput, CarUncheckedCreateWithoutTestDrivesBookingsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutTestDrivesBookingsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutTestDrivesBookingsInput, CarUncheckedUpdateWithoutTestDrivesBookingsInput>
  }

  export type CarUpdateWithoutTestDrivesBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTestDrivesBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutTestDrivesInput = {
    update: XOR<UserUpdateWithoutTestDrivesInput, UserUncheckedUpdateWithoutTestDrivesInput>
    create: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestDrivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestDrivesInput, UserUncheckedUpdateWithoutTestDrivesInput>
  }

  export type UserUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkingHoursCreateWithoutDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHoursUncheckedCreateWithoutDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHoursCreateOrConnectWithoutDealershipInput = {
    where: WorkingHoursWhereUniqueInput
    create: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput>
  }

  export type WorkingHoursCreateManyDealershipInputEnvelope = {
    data: WorkingHoursCreateManyDealershipInput | WorkingHoursCreateManyDealershipInput[]
    skipDuplicates?: boolean
  }

  export type WorkingHoursUpsertWithWhereUniqueWithoutDealershipInput = {
    where: WorkingHoursWhereUniqueInput
    update: XOR<WorkingHoursUpdateWithoutDealershipInput, WorkingHoursUncheckedUpdateWithoutDealershipInput>
    create: XOR<WorkingHoursCreateWithoutDealershipInput, WorkingHoursUncheckedCreateWithoutDealershipInput>
  }

  export type WorkingHoursUpdateWithWhereUniqueWithoutDealershipInput = {
    where: WorkingHoursWhereUniqueInput
    data: XOR<WorkingHoursUpdateWithoutDealershipInput, WorkingHoursUncheckedUpdateWithoutDealershipInput>
  }

  export type WorkingHoursUpdateManyWithWhereWithoutDealershipInput = {
    where: WorkingHoursScalarWhereInput
    data: XOR<WorkingHoursUpdateManyMutationInput, WorkingHoursUncheckedUpdateManyWithoutDealershipInput>
  }

  export type WorkingHoursScalarWhereInput = {
    AND?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
    OR?: WorkingHoursScalarWhereInput[]
    NOT?: WorkingHoursScalarWhereInput | WorkingHoursScalarWhereInput[]
    id?: StringFilter<"WorkingHours"> | string
    dealershipId?: StringFilter<"WorkingHours"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHours"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHours"> | string
    closeTime?: StringFilter<"WorkingHours"> | string
    isOpen?: BoolFilter<"WorkingHours"> | boolean
    createdAt?: DateTimeFilter<"WorkingHours"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHours"> | Date | string
  }

  export type DealershipInfoCreateWithoutWorkingHoursInput = {
    id?: string
    email?: string
    name?: string
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoUncheckedCreateWithoutWorkingHoursInput = {
    id?: string
    email?: string
    name?: string
    phone?: string
    address?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoCreateOrConnectWithoutWorkingHoursInput = {
    where: DealershipInfoWhereUniqueInput
    create: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
  }

  export type DealershipInfoUpsertWithoutWorkingHoursInput = {
    update: XOR<DealershipInfoUpdateWithoutWorkingHoursInput, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    where?: DealershipInfoWhereInput
  }

  export type DealershipInfoUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: DealershipInfoWhereInput
    data: XOR<DealershipInfoUpdateWithoutWorkingHoursInput, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type DealershipInfoUpdateWithoutWorkingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealershipInfoUncheckedUpdateWithoutWorkingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateManyUserInput = {
    id?: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSavedCarCreateManyUserInput = {
    id?: string
    carId: string
    savedAt?: Date | string
  }

  export type TestDriveBookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutTestDrivesBookingsNestedInput
  }

  export type TestDriveBookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type UserSavedCarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateManyCarInput = {
    id?: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSavedCarCreateManyCarInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type TestDriveBookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveBookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCarsNestedInput
  }

  export type UserSavedCarUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursCreateManyDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHoursUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursUncheckedUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHoursUncheckedUpdateManyWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}