
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model TeachingAssignment
 * 
 */
export type TeachingAssignment = $Result.DefaultSelection<Prisma.$TeachingAssignmentPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectSubject
 * 
 */
export type ProjectSubject = $Result.DefaultSelection<Prisma.$ProjectSubjectPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Rubric
 * 
 */
export type Rubric = $Result.DefaultSelection<Prisma.$RubricPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model EvaluationScore
 * 
 */
export type EvaluationScore = $Result.DefaultSelection<Prisma.$EvaluationScorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TitleStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type TitleStatus = (typeof TitleStatus)[keyof typeof TitleStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TitleStatus = $Enums.TitleStatus

export const TitleStatus: typeof $Enums.TitleStatus

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
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingAssignment`: Exposes CRUD operations for the **TeachingAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingAssignments
    * const teachingAssignments = await prisma.teachingAssignment.findMany()
    * ```
    */
  get teachingAssignment(): Prisma.TeachingAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSubject`: Exposes CRUD operations for the **ProjectSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSubjects
    * const projectSubjects = await prisma.projectSubject.findMany()
    * ```
    */
  get projectSubject(): Prisma.ProjectSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rubric`: Exposes CRUD operations for the **Rubric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rubrics
    * const rubrics = await prisma.rubric.findMany()
    * ```
    */
  get rubric(): Prisma.RubricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluationScore`: Exposes CRUD operations for the **EvaluationScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvaluationScores
    * const evaluationScores = await prisma.evaluationScore.findMany()
    * ```
    */
  get evaluationScore(): Prisma.EvaluationScoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Department: 'Department',
    Batch: 'Batch',
    Class: 'Class',
    Subject: 'Subject',
    TeachingAssignment: 'TeachingAssignment',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Project: 'Project',
    ProjectSubject: 'ProjectSubject',
    Review: 'Review',
    Rubric: 'Rubric',
    Submission: 'Submission',
    Evaluation: 'Evaluation',
    EvaluationScore: 'EvaluationScore'
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
      modelProps: "user" | "department" | "batch" | "class" | "subject" | "teachingAssignment" | "group" | "groupMember" | "project" | "projectSubject" | "review" | "rubric" | "submission" | "evaluation" | "evaluationScore"
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
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      TeachingAssignment: {
        payload: Prisma.$TeachingAssignmentPayload<ExtArgs>
        fields: Prisma.TeachingAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TeachingAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          findMany: {
            args: Prisma.TeachingAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          create: {
            args: Prisma.TeachingAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          createMany: {
            args: Prisma.TeachingAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TeachingAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          update: {
            args: Prisma.TeachingAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TeachingAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TeachingAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TeachingAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingAssignment>
          }
          groupBy: {
            args: Prisma.TeachingAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectSubject: {
        payload: Prisma.$ProjectSubjectPayload<ExtArgs>
        fields: Prisma.ProjectSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          findMany: {
            args: Prisma.ProjectSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>[]
          }
          create: {
            args: Prisma.ProjectSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          createMany: {
            args: Prisma.ProjectSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          update: {
            args: Prisma.ProjectSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSubjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSubject>
          }
          groupBy: {
            args: Prisma.ProjectSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSubjectCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Rubric: {
        payload: Prisma.$RubricPayload<ExtArgs>
        fields: Prisma.RubricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RubricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RubricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          findFirst: {
            args: Prisma.RubricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RubricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          findMany: {
            args: Prisma.RubricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>[]
          }
          create: {
            args: Prisma.RubricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          createMany: {
            args: Prisma.RubricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RubricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>[]
          }
          delete: {
            args: Prisma.RubricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          update: {
            args: Prisma.RubricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          deleteMany: {
            args: Prisma.RubricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RubricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RubricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>[]
          }
          upsert: {
            args: Prisma.RubricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RubricPayload>
          }
          aggregate: {
            args: Prisma.RubricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRubric>
          }
          groupBy: {
            args: Prisma.RubricGroupByArgs<ExtArgs>
            result: $Utils.Optional<RubricGroupByOutputType>[]
          }
          count: {
            args: Prisma.RubricCountArgs<ExtArgs>
            result: $Utils.Optional<RubricCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      EvaluationScore: {
        payload: Prisma.$EvaluationScorePayload<ExtArgs>
        fields: Prisma.EvaluationScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          findFirst: {
            args: Prisma.EvaluationScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          findMany: {
            args: Prisma.EvaluationScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>[]
          }
          create: {
            args: Prisma.EvaluationScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          createMany: {
            args: Prisma.EvaluationScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>[]
          }
          delete: {
            args: Prisma.EvaluationScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          update: {
            args: Prisma.EvaluationScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          deleteMany: {
            args: Prisma.EvaluationScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>[]
          }
          upsert: {
            args: Prisma.EvaluationScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationScorePayload>
          }
          aggregate: {
            args: Prisma.EvaluationScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluationScore>
          }
          groupBy: {
            args: Prisma.EvaluationScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationScoreCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationScoreCountAggregateOutputType> | number
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
    department?: DepartmentOmit
    batch?: BatchOmit
    class?: ClassOmit
    subject?: SubjectOmit
    teachingAssignment?: TeachingAssignmentOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    project?: ProjectOmit
    projectSubject?: ProjectSubjectOmit
    review?: ReviewOmit
    rubric?: RubricOmit
    submission?: SubmissionOmit
    evaluation?: EvaluationOmit
    evaluationScore?: EvaluationScoreOmit
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
    teachingAssignments: number
    groups: number
    evaluations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingAssignments?: boolean | UserCountOutputTypeCountTeachingAssignmentsArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    evaluations?: boolean | UserCountOutputTypeCountEvaluationsArgs
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
  export type UserCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    batches: number
    subjects: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | DepartmentCountOutputTypeCountBatchesArgs
    subjects?: boolean | DepartmentCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    classes: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | BatchCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
    teachingAssignments: number
    groups: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
    teachingAssignments?: boolean | ClassCountOutputTypeCountTeachingAssignmentsArgs
    groups?: boolean | ClassCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teachingAssignments: number
    projectSubjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingAssignments?: boolean | SubjectCountOutputTypeCountTeachingAssignmentsArgs
    projectSubjects?: boolean | SubjectCountOutputTypeCountProjectSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountProjectSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSubjectWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    projects: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    projects?: boolean | GroupCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    subjects: number
    submissions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | ProjectCountOutputTypeCountSubjectsArgs
    submissions?: boolean | ProjectCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSubjectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    rubrics: number
    submissions: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rubrics?: boolean | ReviewCountOutputTypeCountRubricsArgs
    submissions?: boolean | ReviewCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountRubricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RubricWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type RubricCountOutputType
   */

  export type RubricCountOutputType = {
    evaluationScores: number
  }

  export type RubricCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluationScores?: boolean | RubricCountOutputTypeCountEvaluationScoresArgs
  }

  // Custom InputTypes
  /**
   * RubricCountOutputType without action
   */
  export type RubricCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RubricCountOutputType
     */
    select?: RubricCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RubricCountOutputType without action
   */
  export type RubricCountOutputTypeCountEvaluationScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationScoreWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    evaluations: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | SubmissionCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }


  /**
   * Count Type EvaluationCountOutputType
   */

  export type EvaluationCountOutputType = {
    scores: number
  }

  export type EvaluationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | EvaluationCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationCountOutputType
     */
    select?: EvaluationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvaluationCountOutputType without action
   */
  export type EvaluationCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationScoreWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    rollNumber: string | null
    classId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    rollNumber: string | null
    classId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    rollNumber: number
    classId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    rollNumber?: true
    classId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    rollNumber?: true
    classId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    rollNumber?: true
    classId?: true
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
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber: string | null
    classId: string | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    rollNumber?: boolean
    classId?: boolean
    class?: boolean | User$classArgs<ExtArgs>
    teachingAssignments?: boolean | User$teachingAssignmentsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    rollNumber?: boolean
    classId?: boolean
    class?: boolean | User$classArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    rollNumber?: boolean
    classId?: boolean
    class?: boolean | User$classArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    rollNumber?: boolean
    classId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "rollNumber" | "classId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | User$classArgs<ExtArgs>
    teachingAssignments?: boolean | User$teachingAssignmentsArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | User$classArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | User$classArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs> | null
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      groups: Prisma.$GroupMemberPayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      rollNumber: string | null
      classId: string | null
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
    class<T extends User$classArgs<ExtArgs> = {}>(args?: Subset<T, User$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teachingAssignments<T extends User$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends User$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly rollNumber: FieldRef<"User", 'String'>
    readonly classId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.class
   */
  export type User$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * User.teachingAssignments
   */
  export type User$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.evaluations
   */
  export type User$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
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
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    totalSemesters: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    totalSemesters: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    totalSemesters: number | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    totalSemesters: number | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    totalSemesters: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    totalSemesters?: true
  }

  export type DepartmentSumAggregateInputType = {
    totalSemesters?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    totalSemesters?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    totalSemesters?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    totalSemesters?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    totalSemesters: number
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalSemesters?: boolean
    batches?: boolean | Department$batchesArgs<ExtArgs>
    subjects?: boolean | Department$subjectsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalSemesters?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalSemesters?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    totalSemesters?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalSemesters", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | Department$batchesArgs<ExtArgs>
    subjects?: boolean | Department$subjectsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      batches: Prisma.$BatchPayload<ExtArgs>[]
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      totalSemesters: number
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batches<T extends Department$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Department$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Department$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Department$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly totalSemesters: FieldRef<"Department", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.batches
   */
  export type Department$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Department.subjects
   */
  export type Department$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchAvgAggregateOutputType = {
    graduationYear: number | null
  }

  export type BatchSumAggregateOutputType = {
    graduationYear: number | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    departmentId: string | null
    graduationYear: number | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    departmentId: string | null
    graduationYear: number | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    departmentId: number
    graduationYear: number
    _all: number
  }


  export type BatchAvgAggregateInputType = {
    graduationYear?: true
  }

  export type BatchSumAggregateInputType = {
    graduationYear?: true
  }

  export type BatchMinAggregateInputType = {
    id?: true
    departmentId?: true
    graduationYear?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    departmentId?: true
    graduationYear?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    departmentId?: true
    graduationYear?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _avg?: BatchAvgAggregateInputType
    _sum?: BatchSumAggregateInputType
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    departmentId: string
    graduationYear: number
    _count: BatchCountAggregateOutputType | null
    _avg: BatchAvgAggregateOutputType | null
    _sum: BatchSumAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    graduationYear?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    classes?: boolean | Batch$classesArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    graduationYear?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    graduationYear?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    departmentId?: boolean
    graduationYear?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentId" | "graduationYear", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    classes?: boolean | Batch$classesArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type BatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      departmentId: string
      graduationYear: number
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Batches and returns the data saved in the database.
     * @param {BatchCreateManyAndReturnArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BatchCreateManyAndReturnArgs>(args?: SelectSubset<T, BatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches and returns the data updated in the database.
     * @param {BatchUpdateManyAndReturnArgs} args - Arguments to update many Batches.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Batches and only return the `id`
     * const batchWithIdOnly = await prisma.batch.updateManyAndReturn({
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
    updateManyAndReturn<T extends BatchUpdateManyAndReturnArgs>(args: SelectSubset<T, BatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classes<T extends Batch$classesArgs<ExtArgs> = {}>(args?: Subset<T, Batch$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly departmentId: FieldRef<"Batch", 'String'>
    readonly graduationYear: FieldRef<"Batch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch createManyAndReturn
   */
  export type BatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch updateManyAndReturn
   */
  export type BatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.classes
   */
  export type Batch$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    section: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    section: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    batchId: number
    section: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    batchId?: true
    section?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    batchId?: true
    section?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    batchId?: true
    section?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    batchId: string
    section: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    section?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    teachingAssignments?: boolean | Class$teachingAssignmentsArgs<ExtArgs>
    groups?: boolean | Class$groupsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    section?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    section?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    batchId?: boolean
    section?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "section", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    teachingAssignments?: boolean | Class$teachingAssignmentsArgs<ExtArgs>
    groups?: boolean | Class$groupsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
      students: Prisma.$UserPayload<ExtArgs>[]
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      section: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachingAssignments<T extends Class$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Class$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Class$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly batchId: FieldRef<"Class", 'String'>
    readonly section: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Class.teachingAssignments
   */
  export type Class$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * Class.groups
   */
  export type Class$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    semester: number | null
  }

  export type SubjectSumAggregateOutputType = {
    semester: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    departmentId: string | null
    semester: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    departmentId: string | null
    semester: number | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    departmentId: number
    semester: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    semester?: true
  }

  export type SubjectSumAggregateInputType = {
    semester?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    semester?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    semester?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    semester?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    departmentId: string
    semester: number
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    semester?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    teachingAssignments?: boolean | Subject$teachingAssignmentsArgs<ExtArgs>
    projectSubjects?: boolean | Subject$projectSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    semester?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    semester?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    departmentId?: boolean
    semester?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "departmentId" | "semester", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    teachingAssignments?: boolean | Subject$teachingAssignmentsArgs<ExtArgs>
    projectSubjects?: boolean | Subject$projectSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      teachingAssignments: Prisma.$TeachingAssignmentPayload<ExtArgs>[]
      projectSubjects: Prisma.$ProjectSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      departmentId: string
      semester: number
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachingAssignments<T extends Subject$teachingAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachingAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectSubjects<T extends Subject$projectSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$projectSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly departmentId: FieldRef<"Subject", 'String'>
    readonly semester: FieldRef<"Subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.teachingAssignments
   */
  export type Subject$teachingAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    cursor?: TeachingAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * Subject.projectSubjects
   */
  export type Subject$projectSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    where?: ProjectSubjectWhereInput
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    cursor?: ProjectSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSubjectScalarFieldEnum | ProjectSubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeachingAssignment
   */

  export type AggregateTeachingAssignment = {
    _count: TeachingAssignmentCountAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  export type TeachingAssignmentMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    subjectId: string | null
    classId: string | null
  }

  export type TeachingAssignmentMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    subjectId: string | null
    classId: string | null
  }

  export type TeachingAssignmentCountAggregateOutputType = {
    id: number
    staffId: number
    subjectId: number
    classId: number
    _all: number
  }


  export type TeachingAssignmentMinAggregateInputType = {
    id?: true
    staffId?: true
    subjectId?: true
    classId?: true
  }

  export type TeachingAssignmentMaxAggregateInputType = {
    id?: true
    staffId?: true
    subjectId?: true
    classId?: true
  }

  export type TeachingAssignmentCountAggregateInputType = {
    id?: true
    staffId?: true
    subjectId?: true
    classId?: true
    _all?: true
  }

  export type TeachingAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignment to aggregate.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingAssignments
    **/
    _count?: true | TeachingAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type GetTeachingAssignmentAggregateType<T extends TeachingAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingAssignment[P]>
      : GetScalarType<T[P], AggregateTeachingAssignment[P]>
  }




  export type TeachingAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingAssignmentWhereInput
    orderBy?: TeachingAssignmentOrderByWithAggregationInput | TeachingAssignmentOrderByWithAggregationInput[]
    by: TeachingAssignmentScalarFieldEnum[] | TeachingAssignmentScalarFieldEnum
    having?: TeachingAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingAssignmentCountAggregateInputType | true
    _min?: TeachingAssignmentMinAggregateInputType
    _max?: TeachingAssignmentMaxAggregateInputType
  }

  export type TeachingAssignmentGroupByOutputType = {
    id: string
    staffId: string
    subjectId: string
    classId: string
    _count: TeachingAssignmentCountAggregateOutputType | null
    _min: TeachingAssignmentMinAggregateOutputType | null
    _max: TeachingAssignmentMaxAggregateOutputType | null
  }

  type GetTeachingAssignmentGroupByPayload<T extends TeachingAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TeachingAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    subjectId?: boolean
    classId?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    subjectId?: boolean
    classId?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    subjectId?: boolean
    classId?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingAssignment"]>

  export type TeachingAssignmentSelectScalar = {
    id?: boolean
    staffId?: boolean
    subjectId?: boolean
    classId?: boolean
  }

  export type TeachingAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "subjectId" | "classId", ExtArgs["result"]["teachingAssignment"]>
  export type TeachingAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $TeachingAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingAssignment"
    objects: {
      staff: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      subjectId: string
      classId: string
    }, ExtArgs["result"]["teachingAssignment"]>
    composites: {}
  }

  type TeachingAssignmentGetPayload<S extends boolean | null | undefined | TeachingAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TeachingAssignmentPayload, S>

  type TeachingAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingAssignmentCountAggregateInputType | true
    }

  export interface TeachingAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingAssignment'], meta: { name: 'TeachingAssignment' } }
    /**
     * Find zero or one TeachingAssignment that matches the filter.
     * @param {TeachingAssignmentFindUniqueArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingAssignmentFindUniqueArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingAssignmentFindFirstArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindFirstOrThrowArgs} args - Arguments to find a TeachingAssignment
     * @example
     * // Get one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany()
     * 
     * // Get first 10 TeachingAssignments
     * const teachingAssignments = await prisma.teachingAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingAssignmentFindManyArgs>(args?: SelectSubset<T, TeachingAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingAssignment.
     * @param {TeachingAssignmentCreateArgs} args - Arguments to create a TeachingAssignment.
     * @example
     * // Create one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.create({
     *   data: {
     *     // ... data to create a TeachingAssignment
     *   }
     * })
     * 
     */
    create<T extends TeachingAssignmentCreateArgs>(args: SelectSubset<T, TeachingAssignmentCreateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingAssignments.
     * @param {TeachingAssignmentCreateManyArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingAssignmentCreateManyArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingAssignments and returns the data saved in the database.
     * @param {TeachingAssignmentCreateManyAndReturnArgs} args - Arguments to create many TeachingAssignments.
     * @example
     * // Create many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingAssignment.
     * @param {TeachingAssignmentDeleteArgs} args - Arguments to delete one TeachingAssignment.
     * @example
     * // Delete one TeachingAssignment
     * const TeachingAssignment = await prisma.teachingAssignment.delete({
     *   where: {
     *     // ... filter to delete one TeachingAssignment
     *   }
     * })
     * 
     */
    delete<T extends TeachingAssignmentDeleteArgs>(args: SelectSubset<T, TeachingAssignmentDeleteArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingAssignment.
     * @param {TeachingAssignmentUpdateArgs} args - Arguments to update one TeachingAssignment.
     * @example
     * // Update one TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingAssignmentUpdateArgs>(args: SelectSubset<T, TeachingAssignmentUpdateArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingAssignments.
     * @param {TeachingAssignmentDeleteManyArgs} args - Arguments to filter TeachingAssignments to delete.
     * @example
     * // Delete a few TeachingAssignments
     * const { count } = await prisma.teachingAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingAssignmentDeleteManyArgs>(args?: SelectSubset<T, TeachingAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingAssignmentUpdateManyArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingAssignments and returns the data updated in the database.
     * @param {TeachingAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TeachingAssignments.
     * @example
     * // Update many TeachingAssignments
     * const teachingAssignment = await prisma.teachingAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingAssignments and only return the `id`
     * const teachingAssignmentWithIdOnly = await prisma.teachingAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeachingAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingAssignment.
     * @param {TeachingAssignmentUpsertArgs} args - Arguments to update or create a TeachingAssignment.
     * @example
     * // Update or create a TeachingAssignment
     * const teachingAssignment = await prisma.teachingAssignment.upsert({
     *   create: {
     *     // ... data to create a TeachingAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TeachingAssignmentUpsertArgs>(args: SelectSubset<T, TeachingAssignmentUpsertArgs<ExtArgs>>): Prisma__TeachingAssignmentClient<$Result.GetResult<Prisma.$TeachingAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentCountArgs} args - Arguments to filter TeachingAssignments to count.
     * @example
     * // Count the number of TeachingAssignments
     * const count = await prisma.teachingAssignment.count({
     *   where: {
     *     // ... the filter for the TeachingAssignments we want to count
     *   }
     * })
    **/
    count<T extends TeachingAssignmentCountArgs>(
      args?: Subset<T, TeachingAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeachingAssignmentAggregateArgs>(args: Subset<T, TeachingAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTeachingAssignmentAggregateType<T>>

    /**
     * Group by TeachingAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingAssignmentGroupByArgs} args - Group by arguments.
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
      T extends TeachingAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TeachingAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeachingAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingAssignment model
   */
  readonly fields: TeachingAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeachingAssignment model
   */
  interface TeachingAssignmentFieldRefs {
    readonly id: FieldRef<"TeachingAssignment", 'String'>
    readonly staffId: FieldRef<"TeachingAssignment", 'String'>
    readonly subjectId: FieldRef<"TeachingAssignment", 'String'>
    readonly classId: FieldRef<"TeachingAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeachingAssignment findUnique
   */
  export type TeachingAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findUniqueOrThrow
   */
  export type TeachingAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment findFirst
   */
  export type TeachingAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findFirstOrThrow
   */
  export type TeachingAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignment to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingAssignments.
     */
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment findMany
   */
  export type TeachingAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TeachingAssignments to fetch.
     */
    where?: TeachingAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingAssignments to fetch.
     */
    orderBy?: TeachingAssignmentOrderByWithRelationInput | TeachingAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingAssignments.
     */
    cursor?: TeachingAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingAssignments.
     */
    skip?: number
    distinct?: TeachingAssignmentScalarFieldEnum | TeachingAssignmentScalarFieldEnum[]
  }

  /**
   * TeachingAssignment create
   */
  export type TeachingAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
  }

  /**
   * TeachingAssignment createMany
   */
  export type TeachingAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingAssignment createManyAndReturn
   */
  export type TeachingAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingAssignments.
     */
    data: TeachingAssignmentCreateManyInput | TeachingAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment update
   */
  export type TeachingAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingAssignment.
     */
    data: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TeachingAssignment to update.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment updateMany
   */
  export type TeachingAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
  }

  /**
   * TeachingAssignment updateManyAndReturn
   */
  export type TeachingAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TeachingAssignments.
     */
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TeachingAssignments to update
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingAssignment upsert
   */
  export type TeachingAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingAssignment to update in case it exists.
     */
    where: TeachingAssignmentWhereUniqueInput
    /**
     * In case the TeachingAssignment found by the `where` argument doesn't exist, create a new TeachingAssignment with this data.
     */
    create: XOR<TeachingAssignmentCreateInput, TeachingAssignmentUncheckedCreateInput>
    /**
     * In case the TeachingAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingAssignmentUpdateInput, TeachingAssignmentUncheckedUpdateInput>
  }

  /**
   * TeachingAssignment delete
   */
  export type TeachingAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TeachingAssignment to delete.
     */
    where: TeachingAssignmentWhereUniqueInput
  }

  /**
   * TeachingAssignment deleteMany
   */
  export type TeachingAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingAssignments to delete
     */
    where?: TeachingAssignmentWhereInput
    /**
     * Limit how many TeachingAssignments to delete.
     */
    limit?: number
  }

  /**
   * TeachingAssignment without action
   */
  export type TeachingAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingAssignment
     */
    select?: TeachingAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingAssignment
     */
    omit?: TeachingAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    classId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    classId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    classId: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    classId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    classId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    classId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    classId: string
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    projects?: boolean | Group$projectsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    classId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "classId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    projects?: boolean | Group$projectsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      classId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Group$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Group$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly classId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.projects
   */
  export type Group$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    groupId: string | null
    userId: string | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    groupId: string | null
    userId: string | null
  }

  export type GroupMemberCountAggregateOutputType = {
    groupId: number
    userId: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    groupId?: true
    userId?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    groupId?: true
    userId?: true
  }

  export type GroupMemberCountAggregateInputType = {
    groupId?: true
    userId?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    groupId: string
    userId: string
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    groupId?: boolean
    userId?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "userId", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: string
      userId: string
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.updateManyAndReturn({
     *   select: { groupId: true },
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    githubRepo: string | null
    groupId: string | null
    proposedTitle: string | null
    titleStatus: $Enums.TitleStatus | null
    titleProposalDeadline: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    githubRepo: string | null
    groupId: string | null
    proposedTitle: string | null
    titleStatus: $Enums.TitleStatus | null
    titleProposalDeadline: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    githubRepo: number
    groupId: number
    proposedTitle: number
    titleStatus: number
    titleProposalDeadline: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubRepo?: true
    groupId?: true
    proposedTitle?: true
    titleStatus?: true
    titleProposalDeadline?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubRepo?: true
    groupId?: true
    proposedTitle?: true
    titleStatus?: true
    titleProposalDeadline?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    githubRepo?: true
    groupId?: true
    proposedTitle?: true
    titleStatus?: true
    titleProposalDeadline?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string | null
    description: string | null
    githubRepo: string | null
    groupId: string
    proposedTitle: string | null
    titleStatus: $Enums.TitleStatus | null
    titleProposalDeadline: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    githubRepo?: boolean
    groupId?: boolean
    proposedTitle?: boolean
    titleStatus?: boolean
    titleProposalDeadline?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    subjects?: boolean | Project$subjectsArgs<ExtArgs>
    submissions?: boolean | Project$submissionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    githubRepo?: boolean
    groupId?: boolean
    proposedTitle?: boolean
    titleStatus?: boolean
    titleProposalDeadline?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    githubRepo?: boolean
    groupId?: boolean
    proposedTitle?: boolean
    titleStatus?: boolean
    titleProposalDeadline?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    githubRepo?: boolean
    groupId?: boolean
    proposedTitle?: boolean
    titleStatus?: boolean
    titleProposalDeadline?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "githubRepo" | "groupId" | "proposedTitle" | "titleStatus" | "titleProposalDeadline", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    subjects?: boolean | Project$subjectsArgs<ExtArgs>
    submissions?: boolean | Project$submissionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      subjects: Prisma.$ProjectSubjectPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      description: string | null
      githubRepo: string | null
      groupId: string
      proposedTitle: string | null
      titleStatus: $Enums.TitleStatus | null
      titleProposalDeadline: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends Project$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Project$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Project$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly githubRepo: FieldRef<"Project", 'String'>
    readonly groupId: FieldRef<"Project", 'String'>
    readonly proposedTitle: FieldRef<"Project", 'String'>
    readonly titleStatus: FieldRef<"Project", 'TitleStatus'>
    readonly titleProposalDeadline: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.subjects
   */
  export type Project$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    where?: ProjectSubjectWhereInput
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    cursor?: ProjectSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSubjectScalarFieldEnum | ProjectSubjectScalarFieldEnum[]
  }

  /**
   * Project.submissions
   */
  export type Project$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSubject
   */

  export type AggregateProjectSubject = {
    _count: ProjectSubjectCountAggregateOutputType | null
    _min: ProjectSubjectMinAggregateOutputType | null
    _max: ProjectSubjectMaxAggregateOutputType | null
  }

  export type ProjectSubjectMinAggregateOutputType = {
    projectId: string | null
    subjectId: string | null
  }

  export type ProjectSubjectMaxAggregateOutputType = {
    projectId: string | null
    subjectId: string | null
  }

  export type ProjectSubjectCountAggregateOutputType = {
    projectId: number
    subjectId: number
    _all: number
  }


  export type ProjectSubjectMinAggregateInputType = {
    projectId?: true
    subjectId?: true
  }

  export type ProjectSubjectMaxAggregateInputType = {
    projectId?: true
    subjectId?: true
  }

  export type ProjectSubjectCountAggregateInputType = {
    projectId?: true
    subjectId?: true
    _all?: true
  }

  export type ProjectSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSubject to aggregate.
     */
    where?: ProjectSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSubjects to fetch.
     */
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSubjects
    **/
    _count?: true | ProjectSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSubjectMaxAggregateInputType
  }

  export type GetProjectSubjectAggregateType<T extends ProjectSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSubject[P]>
      : GetScalarType<T[P], AggregateProjectSubject[P]>
  }




  export type ProjectSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSubjectWhereInput
    orderBy?: ProjectSubjectOrderByWithAggregationInput | ProjectSubjectOrderByWithAggregationInput[]
    by: ProjectSubjectScalarFieldEnum[] | ProjectSubjectScalarFieldEnum
    having?: ProjectSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSubjectCountAggregateInputType | true
    _min?: ProjectSubjectMinAggregateInputType
    _max?: ProjectSubjectMaxAggregateInputType
  }

  export type ProjectSubjectGroupByOutputType = {
    projectId: string
    subjectId: string
    _count: ProjectSubjectCountAggregateOutputType | null
    _min: ProjectSubjectMinAggregateOutputType | null
    _max: ProjectSubjectMaxAggregateOutputType | null
  }

  type GetProjectSubjectGroupByPayload<T extends ProjectSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSubjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    subjectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSubject"]>

  export type ProjectSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    subjectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSubject"]>

  export type ProjectSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    subjectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSubject"]>

  export type ProjectSubjectSelectScalar = {
    projectId?: boolean
    subjectId?: boolean
  }

  export type ProjectSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "subjectId", ExtArgs["result"]["projectSubject"]>
  export type ProjectSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type ProjectSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type ProjectSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $ProjectSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSubject"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: string
      subjectId: string
    }, ExtArgs["result"]["projectSubject"]>
    composites: {}
  }

  type ProjectSubjectGetPayload<S extends boolean | null | undefined | ProjectSubjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectSubjectPayload, S>

  type ProjectSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSubjectCountAggregateInputType | true
    }

  export interface ProjectSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSubject'], meta: { name: 'ProjectSubject' } }
    /**
     * Find zero or one ProjectSubject that matches the filter.
     * @param {ProjectSubjectFindUniqueArgs} args - Arguments to find a ProjectSubject
     * @example
     * // Get one ProjectSubject
     * const projectSubject = await prisma.projectSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSubjectFindUniqueArgs>(args: SelectSubset<T, ProjectSubjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSubjectFindUniqueOrThrowArgs} args - Arguments to find a ProjectSubject
     * @example
     * // Get one ProjectSubject
     * const projectSubject = await prisma.projectSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectFindFirstArgs} args - Arguments to find a ProjectSubject
     * @example
     * // Get one ProjectSubject
     * const projectSubject = await prisma.projectSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSubjectFindFirstArgs>(args?: SelectSubset<T, ProjectSubjectFindFirstArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectFindFirstOrThrowArgs} args - Arguments to find a ProjectSubject
     * @example
     * // Get one ProjectSubject
     * const projectSubject = await prisma.projectSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSubjects
     * const projectSubjects = await prisma.projectSubject.findMany()
     * 
     * // Get first 10 ProjectSubjects
     * const projectSubjects = await prisma.projectSubject.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectSubjectWithProjectIdOnly = await prisma.projectSubject.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectSubjectFindManyArgs>(args?: SelectSubset<T, ProjectSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectSubject.
     * @param {ProjectSubjectCreateArgs} args - Arguments to create a ProjectSubject.
     * @example
     * // Create one ProjectSubject
     * const ProjectSubject = await prisma.projectSubject.create({
     *   data: {
     *     // ... data to create a ProjectSubject
     *   }
     * })
     * 
     */
    create<T extends ProjectSubjectCreateArgs>(args: SelectSubset<T, ProjectSubjectCreateArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectSubjects.
     * @param {ProjectSubjectCreateManyArgs} args - Arguments to create many ProjectSubjects.
     * @example
     * // Create many ProjectSubjects
     * const projectSubject = await prisma.projectSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSubjectCreateManyArgs>(args?: SelectSubset<T, ProjectSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSubjects and returns the data saved in the database.
     * @param {ProjectSubjectCreateManyAndReturnArgs} args - Arguments to create many ProjectSubjects.
     * @example
     * // Create many ProjectSubjects
     * const projectSubject = await prisma.projectSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSubjects and only return the `projectId`
     * const projectSubjectWithProjectIdOnly = await prisma.projectSubject.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectSubject.
     * @param {ProjectSubjectDeleteArgs} args - Arguments to delete one ProjectSubject.
     * @example
     * // Delete one ProjectSubject
     * const ProjectSubject = await prisma.projectSubject.delete({
     *   where: {
     *     // ... filter to delete one ProjectSubject
     *   }
     * })
     * 
     */
    delete<T extends ProjectSubjectDeleteArgs>(args: SelectSubset<T, ProjectSubjectDeleteArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectSubject.
     * @param {ProjectSubjectUpdateArgs} args - Arguments to update one ProjectSubject.
     * @example
     * // Update one ProjectSubject
     * const projectSubject = await prisma.projectSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSubjectUpdateArgs>(args: SelectSubset<T, ProjectSubjectUpdateArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectSubjects.
     * @param {ProjectSubjectDeleteManyArgs} args - Arguments to filter ProjectSubjects to delete.
     * @example
     * // Delete a few ProjectSubjects
     * const { count } = await prisma.projectSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSubjectDeleteManyArgs>(args?: SelectSubset<T, ProjectSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSubjects
     * const projectSubject = await prisma.projectSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSubjectUpdateManyArgs>(args: SelectSubset<T, ProjectSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSubjects and returns the data updated in the database.
     * @param {ProjectSubjectUpdateManyAndReturnArgs} args - Arguments to update many ProjectSubjects.
     * @example
     * // Update many ProjectSubjects
     * const projectSubject = await prisma.projectSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectSubjects and only return the `projectId`
     * const projectSubjectWithProjectIdOnly = await prisma.projectSubject.updateManyAndReturn({
     *   select: { projectId: true },
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
    updateManyAndReturn<T extends ProjectSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectSubject.
     * @param {ProjectSubjectUpsertArgs} args - Arguments to update or create a ProjectSubject.
     * @example
     * // Update or create a ProjectSubject
     * const projectSubject = await prisma.projectSubject.upsert({
     *   create: {
     *     // ... data to create a ProjectSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSubject we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSubjectUpsertArgs>(args: SelectSubset<T, ProjectSubjectUpsertArgs<ExtArgs>>): Prisma__ProjectSubjectClient<$Result.GetResult<Prisma.$ProjectSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectCountArgs} args - Arguments to filter ProjectSubjects to count.
     * @example
     * // Count the number of ProjectSubjects
     * const count = await prisma.projectSubject.count({
     *   where: {
     *     // ... the filter for the ProjectSubjects we want to count
     *   }
     * })
    **/
    count<T extends ProjectSubjectCountArgs>(
      args?: Subset<T, ProjectSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectSubjectAggregateArgs>(args: Subset<T, ProjectSubjectAggregateArgs>): Prisma.PrismaPromise<GetProjectSubjectAggregateType<T>>

    /**
     * Group by ProjectSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSubjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSubjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSubject model
   */
  readonly fields: ProjectSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectSubject model
   */
  interface ProjectSubjectFieldRefs {
    readonly projectId: FieldRef<"ProjectSubject", 'String'>
    readonly subjectId: FieldRef<"ProjectSubject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSubject findUnique
   */
  export type ProjectSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSubject to fetch.
     */
    where: ProjectSubjectWhereUniqueInput
  }

  /**
   * ProjectSubject findUniqueOrThrow
   */
  export type ProjectSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSubject to fetch.
     */
    where: ProjectSubjectWhereUniqueInput
  }

  /**
   * ProjectSubject findFirst
   */
  export type ProjectSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSubject to fetch.
     */
    where?: ProjectSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSubjects to fetch.
     */
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSubjects.
     */
    cursor?: ProjectSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSubjects.
     */
    distinct?: ProjectSubjectScalarFieldEnum | ProjectSubjectScalarFieldEnum[]
  }

  /**
   * ProjectSubject findFirstOrThrow
   */
  export type ProjectSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSubject to fetch.
     */
    where?: ProjectSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSubjects to fetch.
     */
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSubjects.
     */
    cursor?: ProjectSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSubjects.
     */
    distinct?: ProjectSubjectScalarFieldEnum | ProjectSubjectScalarFieldEnum[]
  }

  /**
   * ProjectSubject findMany
   */
  export type ProjectSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSubjects to fetch.
     */
    where?: ProjectSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSubjects to fetch.
     */
    orderBy?: ProjectSubjectOrderByWithRelationInput | ProjectSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSubjects.
     */
    cursor?: ProjectSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSubjects.
     */
    skip?: number
    distinct?: ProjectSubjectScalarFieldEnum | ProjectSubjectScalarFieldEnum[]
  }

  /**
   * ProjectSubject create
   */
  export type ProjectSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSubject.
     */
    data: XOR<ProjectSubjectCreateInput, ProjectSubjectUncheckedCreateInput>
  }

  /**
   * ProjectSubject createMany
   */
  export type ProjectSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSubjects.
     */
    data: ProjectSubjectCreateManyInput | ProjectSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectSubject createManyAndReturn
   */
  export type ProjectSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectSubjects.
     */
    data: ProjectSubjectCreateManyInput | ProjectSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSubject update
   */
  export type ProjectSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSubject.
     */
    data: XOR<ProjectSubjectUpdateInput, ProjectSubjectUncheckedUpdateInput>
    /**
     * Choose, which ProjectSubject to update.
     */
    where: ProjectSubjectWhereUniqueInput
  }

  /**
   * ProjectSubject updateMany
   */
  export type ProjectSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSubjects.
     */
    data: XOR<ProjectSubjectUpdateManyMutationInput, ProjectSubjectUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSubjects to update
     */
    where?: ProjectSubjectWhereInput
    /**
     * Limit how many ProjectSubjects to update.
     */
    limit?: number
  }

  /**
   * ProjectSubject updateManyAndReturn
   */
  export type ProjectSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * The data used to update ProjectSubjects.
     */
    data: XOR<ProjectSubjectUpdateManyMutationInput, ProjectSubjectUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSubjects to update
     */
    where?: ProjectSubjectWhereInput
    /**
     * Limit how many ProjectSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSubject upsert
   */
  export type ProjectSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSubject to update in case it exists.
     */
    where: ProjectSubjectWhereUniqueInput
    /**
     * In case the ProjectSubject found by the `where` argument doesn't exist, create a new ProjectSubject with this data.
     */
    create: XOR<ProjectSubjectCreateInput, ProjectSubjectUncheckedCreateInput>
    /**
     * In case the ProjectSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSubjectUpdateInput, ProjectSubjectUncheckedUpdateInput>
  }

  /**
   * ProjectSubject delete
   */
  export type ProjectSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
    /**
     * Filter which ProjectSubject to delete.
     */
    where: ProjectSubjectWhereUniqueInput
  }

  /**
   * ProjectSubject deleteMany
   */
  export type ProjectSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSubjects to delete
     */
    where?: ProjectSubjectWhereInput
    /**
     * Limit how many ProjectSubjects to delete.
     */
    limit?: number
  }

  /**
   * ProjectSubject without action
   */
  export type ProjectSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSubject
     */
    select?: ProjectSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSubject
     */
    omit?: ProjectSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSubjectInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    name: string | null
    deadline: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deadline: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    name: number
    deadline: number
    _all: number
  }


  export type ReviewMinAggregateInputType = {
    id?: true
    name?: true
    deadline?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    name?: true
    deadline?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    name?: true
    deadline?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    name: string
    deadline: Date
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deadline?: boolean
    rubrics?: boolean | Review$rubricsArgs<ExtArgs>
    submissions?: boolean | Review$submissionsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deadline?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deadline?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    name?: boolean
    deadline?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deadline", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rubrics?: boolean | Review$rubricsArgs<ExtArgs>
    submissions?: boolean | Review$submissionsArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      rubrics: Prisma.$RubricPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      deadline: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rubrics<T extends Review$rubricsArgs<ExtArgs> = {}>(args?: Subset<T, Review$rubricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Review$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Review$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly name: FieldRef<"Review", 'String'>
    readonly deadline: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.rubrics
   */
  export type Review$rubricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    where?: RubricWhereInput
    orderBy?: RubricOrderByWithRelationInput | RubricOrderByWithRelationInput[]
    cursor?: RubricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RubricScalarFieldEnum | RubricScalarFieldEnum[]
  }

  /**
   * Review.submissions
   */
  export type Review$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Rubric
   */

  export type AggregateRubric = {
    _count: RubricCountAggregateOutputType | null
    _avg: RubricAvgAggregateOutputType | null
    _sum: RubricSumAggregateOutputType | null
    _min: RubricMinAggregateOutputType | null
    _max: RubricMaxAggregateOutputType | null
  }

  export type RubricAvgAggregateOutputType = {
    maxScore: number | null
  }

  export type RubricSumAggregateOutputType = {
    maxScore: number | null
  }

  export type RubricMinAggregateOutputType = {
    id: string | null
    reviewId: string | null
    criterion: string | null
    maxScore: number | null
  }

  export type RubricMaxAggregateOutputType = {
    id: string | null
    reviewId: string | null
    criterion: string | null
    maxScore: number | null
  }

  export type RubricCountAggregateOutputType = {
    id: number
    reviewId: number
    criterion: number
    maxScore: number
    _all: number
  }


  export type RubricAvgAggregateInputType = {
    maxScore?: true
  }

  export type RubricSumAggregateInputType = {
    maxScore?: true
  }

  export type RubricMinAggregateInputType = {
    id?: true
    reviewId?: true
    criterion?: true
    maxScore?: true
  }

  export type RubricMaxAggregateInputType = {
    id?: true
    reviewId?: true
    criterion?: true
    maxScore?: true
  }

  export type RubricCountAggregateInputType = {
    id?: true
    reviewId?: true
    criterion?: true
    maxScore?: true
    _all?: true
  }

  export type RubricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rubric to aggregate.
     */
    where?: RubricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rubrics to fetch.
     */
    orderBy?: RubricOrderByWithRelationInput | RubricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RubricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rubrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rubrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rubrics
    **/
    _count?: true | RubricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RubricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RubricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RubricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RubricMaxAggregateInputType
  }

  export type GetRubricAggregateType<T extends RubricAggregateArgs> = {
        [P in keyof T & keyof AggregateRubric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRubric[P]>
      : GetScalarType<T[P], AggregateRubric[P]>
  }




  export type RubricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RubricWhereInput
    orderBy?: RubricOrderByWithAggregationInput | RubricOrderByWithAggregationInput[]
    by: RubricScalarFieldEnum[] | RubricScalarFieldEnum
    having?: RubricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RubricCountAggregateInputType | true
    _avg?: RubricAvgAggregateInputType
    _sum?: RubricSumAggregateInputType
    _min?: RubricMinAggregateInputType
    _max?: RubricMaxAggregateInputType
  }

  export type RubricGroupByOutputType = {
    id: string
    reviewId: string
    criterion: string
    maxScore: number
    _count: RubricCountAggregateOutputType | null
    _avg: RubricAvgAggregateOutputType | null
    _sum: RubricSumAggregateOutputType | null
    _min: RubricMinAggregateOutputType | null
    _max: RubricMaxAggregateOutputType | null
  }

  type GetRubricGroupByPayload<T extends RubricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RubricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RubricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RubricGroupByOutputType[P]>
            : GetScalarType<T[P], RubricGroupByOutputType[P]>
        }
      >
    >


  export type RubricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    criterion?: boolean
    maxScore?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    evaluationScores?: boolean | Rubric$evaluationScoresArgs<ExtArgs>
    _count?: boolean | RubricCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rubric"]>

  export type RubricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    criterion?: boolean
    maxScore?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rubric"]>

  export type RubricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    criterion?: boolean
    maxScore?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rubric"]>

  export type RubricSelectScalar = {
    id?: boolean
    reviewId?: boolean
    criterion?: boolean
    maxScore?: boolean
  }

  export type RubricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "criterion" | "maxScore", ExtArgs["result"]["rubric"]>
  export type RubricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    evaluationScores?: boolean | Rubric$evaluationScoresArgs<ExtArgs>
    _count?: boolean | RubricCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RubricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type RubricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $RubricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rubric"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      evaluationScores: Prisma.$EvaluationScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewId: string
      criterion: string
      maxScore: number
    }, ExtArgs["result"]["rubric"]>
    composites: {}
  }

  type RubricGetPayload<S extends boolean | null | undefined | RubricDefaultArgs> = $Result.GetResult<Prisma.$RubricPayload, S>

  type RubricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RubricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RubricCountAggregateInputType | true
    }

  export interface RubricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rubric'], meta: { name: 'Rubric' } }
    /**
     * Find zero or one Rubric that matches the filter.
     * @param {RubricFindUniqueArgs} args - Arguments to find a Rubric
     * @example
     * // Get one Rubric
     * const rubric = await prisma.rubric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RubricFindUniqueArgs>(args: SelectSubset<T, RubricFindUniqueArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rubric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RubricFindUniqueOrThrowArgs} args - Arguments to find a Rubric
     * @example
     * // Get one Rubric
     * const rubric = await prisma.rubric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RubricFindUniqueOrThrowArgs>(args: SelectSubset<T, RubricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rubric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricFindFirstArgs} args - Arguments to find a Rubric
     * @example
     * // Get one Rubric
     * const rubric = await prisma.rubric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RubricFindFirstArgs>(args?: SelectSubset<T, RubricFindFirstArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rubric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricFindFirstOrThrowArgs} args - Arguments to find a Rubric
     * @example
     * // Get one Rubric
     * const rubric = await prisma.rubric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RubricFindFirstOrThrowArgs>(args?: SelectSubset<T, RubricFindFirstOrThrowArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rubrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rubrics
     * const rubrics = await prisma.rubric.findMany()
     * 
     * // Get first 10 Rubrics
     * const rubrics = await prisma.rubric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rubricWithIdOnly = await prisma.rubric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RubricFindManyArgs>(args?: SelectSubset<T, RubricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rubric.
     * @param {RubricCreateArgs} args - Arguments to create a Rubric.
     * @example
     * // Create one Rubric
     * const Rubric = await prisma.rubric.create({
     *   data: {
     *     // ... data to create a Rubric
     *   }
     * })
     * 
     */
    create<T extends RubricCreateArgs>(args: SelectSubset<T, RubricCreateArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rubrics.
     * @param {RubricCreateManyArgs} args - Arguments to create many Rubrics.
     * @example
     * // Create many Rubrics
     * const rubric = await prisma.rubric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RubricCreateManyArgs>(args?: SelectSubset<T, RubricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rubrics and returns the data saved in the database.
     * @param {RubricCreateManyAndReturnArgs} args - Arguments to create many Rubrics.
     * @example
     * // Create many Rubrics
     * const rubric = await prisma.rubric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rubrics and only return the `id`
     * const rubricWithIdOnly = await prisma.rubric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RubricCreateManyAndReturnArgs>(args?: SelectSubset<T, RubricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rubric.
     * @param {RubricDeleteArgs} args - Arguments to delete one Rubric.
     * @example
     * // Delete one Rubric
     * const Rubric = await prisma.rubric.delete({
     *   where: {
     *     // ... filter to delete one Rubric
     *   }
     * })
     * 
     */
    delete<T extends RubricDeleteArgs>(args: SelectSubset<T, RubricDeleteArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rubric.
     * @param {RubricUpdateArgs} args - Arguments to update one Rubric.
     * @example
     * // Update one Rubric
     * const rubric = await prisma.rubric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RubricUpdateArgs>(args: SelectSubset<T, RubricUpdateArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rubrics.
     * @param {RubricDeleteManyArgs} args - Arguments to filter Rubrics to delete.
     * @example
     * // Delete a few Rubrics
     * const { count } = await prisma.rubric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RubricDeleteManyArgs>(args?: SelectSubset<T, RubricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rubrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rubrics
     * const rubric = await prisma.rubric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RubricUpdateManyArgs>(args: SelectSubset<T, RubricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rubrics and returns the data updated in the database.
     * @param {RubricUpdateManyAndReturnArgs} args - Arguments to update many Rubrics.
     * @example
     * // Update many Rubrics
     * const rubric = await prisma.rubric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rubrics and only return the `id`
     * const rubricWithIdOnly = await prisma.rubric.updateManyAndReturn({
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
    updateManyAndReturn<T extends RubricUpdateManyAndReturnArgs>(args: SelectSubset<T, RubricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rubric.
     * @param {RubricUpsertArgs} args - Arguments to update or create a Rubric.
     * @example
     * // Update or create a Rubric
     * const rubric = await prisma.rubric.upsert({
     *   create: {
     *     // ... data to create a Rubric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rubric we want to update
     *   }
     * })
     */
    upsert<T extends RubricUpsertArgs>(args: SelectSubset<T, RubricUpsertArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rubrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricCountArgs} args - Arguments to filter Rubrics to count.
     * @example
     * // Count the number of Rubrics
     * const count = await prisma.rubric.count({
     *   where: {
     *     // ... the filter for the Rubrics we want to count
     *   }
     * })
    **/
    count<T extends RubricCountArgs>(
      args?: Subset<T, RubricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RubricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rubric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RubricAggregateArgs>(args: Subset<T, RubricAggregateArgs>): Prisma.PrismaPromise<GetRubricAggregateType<T>>

    /**
     * Group by Rubric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RubricGroupByArgs} args - Group by arguments.
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
      T extends RubricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RubricGroupByArgs['orderBy'] }
        : { orderBy?: RubricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RubricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRubricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rubric model
   */
  readonly fields: RubricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rubric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RubricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluationScores<T extends Rubric$evaluationScoresArgs<ExtArgs> = {}>(args?: Subset<T, Rubric$evaluationScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rubric model
   */
  interface RubricFieldRefs {
    readonly id: FieldRef<"Rubric", 'String'>
    readonly reviewId: FieldRef<"Rubric", 'String'>
    readonly criterion: FieldRef<"Rubric", 'String'>
    readonly maxScore: FieldRef<"Rubric", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rubric findUnique
   */
  export type RubricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter, which Rubric to fetch.
     */
    where: RubricWhereUniqueInput
  }

  /**
   * Rubric findUniqueOrThrow
   */
  export type RubricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter, which Rubric to fetch.
     */
    where: RubricWhereUniqueInput
  }

  /**
   * Rubric findFirst
   */
  export type RubricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter, which Rubric to fetch.
     */
    where?: RubricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rubrics to fetch.
     */
    orderBy?: RubricOrderByWithRelationInput | RubricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rubrics.
     */
    cursor?: RubricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rubrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rubrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rubrics.
     */
    distinct?: RubricScalarFieldEnum | RubricScalarFieldEnum[]
  }

  /**
   * Rubric findFirstOrThrow
   */
  export type RubricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter, which Rubric to fetch.
     */
    where?: RubricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rubrics to fetch.
     */
    orderBy?: RubricOrderByWithRelationInput | RubricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rubrics.
     */
    cursor?: RubricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rubrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rubrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rubrics.
     */
    distinct?: RubricScalarFieldEnum | RubricScalarFieldEnum[]
  }

  /**
   * Rubric findMany
   */
  export type RubricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter, which Rubrics to fetch.
     */
    where?: RubricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rubrics to fetch.
     */
    orderBy?: RubricOrderByWithRelationInput | RubricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rubrics.
     */
    cursor?: RubricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rubrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rubrics.
     */
    skip?: number
    distinct?: RubricScalarFieldEnum | RubricScalarFieldEnum[]
  }

  /**
   * Rubric create
   */
  export type RubricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * The data needed to create a Rubric.
     */
    data: XOR<RubricCreateInput, RubricUncheckedCreateInput>
  }

  /**
   * Rubric createMany
   */
  export type RubricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rubrics.
     */
    data: RubricCreateManyInput | RubricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rubric createManyAndReturn
   */
  export type RubricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * The data used to create many Rubrics.
     */
    data: RubricCreateManyInput | RubricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rubric update
   */
  export type RubricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * The data needed to update a Rubric.
     */
    data: XOR<RubricUpdateInput, RubricUncheckedUpdateInput>
    /**
     * Choose, which Rubric to update.
     */
    where: RubricWhereUniqueInput
  }

  /**
   * Rubric updateMany
   */
  export type RubricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rubrics.
     */
    data: XOR<RubricUpdateManyMutationInput, RubricUncheckedUpdateManyInput>
    /**
     * Filter which Rubrics to update
     */
    where?: RubricWhereInput
    /**
     * Limit how many Rubrics to update.
     */
    limit?: number
  }

  /**
   * Rubric updateManyAndReturn
   */
  export type RubricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * The data used to update Rubrics.
     */
    data: XOR<RubricUpdateManyMutationInput, RubricUncheckedUpdateManyInput>
    /**
     * Filter which Rubrics to update
     */
    where?: RubricWhereInput
    /**
     * Limit how many Rubrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rubric upsert
   */
  export type RubricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * The filter to search for the Rubric to update in case it exists.
     */
    where: RubricWhereUniqueInput
    /**
     * In case the Rubric found by the `where` argument doesn't exist, create a new Rubric with this data.
     */
    create: XOR<RubricCreateInput, RubricUncheckedCreateInput>
    /**
     * In case the Rubric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RubricUpdateInput, RubricUncheckedUpdateInput>
  }

  /**
   * Rubric delete
   */
  export type RubricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
    /**
     * Filter which Rubric to delete.
     */
    where: RubricWhereUniqueInput
  }

  /**
   * Rubric deleteMany
   */
  export type RubricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rubrics to delete
     */
    where?: RubricWhereInput
    /**
     * Limit how many Rubrics to delete.
     */
    limit?: number
  }

  /**
   * Rubric.evaluationScores
   */
  export type Rubric$evaluationScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    where?: EvaluationScoreWhereInput
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    cursor?: EvaluationScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScoreScalarFieldEnum | EvaluationScoreScalarFieldEnum[]
  }

  /**
   * Rubric without action
   */
  export type RubricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rubric
     */
    select?: RubricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rubric
     */
    omit?: RubricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RubricInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    reviewId: string | null
    report: string | null
    fileUrl: string | null
    submittedAt: Date | null
    llmSummary: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    reviewId: string | null
    report: string | null
    fileUrl: string | null
    submittedAt: Date | null
    llmSummary: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    projectId: number
    reviewId: number
    report: number
    fileUrl: number
    submittedAt: number
    llmSummary: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    projectId?: true
    reviewId?: true
    report?: true
    fileUrl?: true
    submittedAt?: true
    llmSummary?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    projectId?: true
    reviewId?: true
    report?: true
    fileUrl?: true
    submittedAt?: true
    llmSummary?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    projectId?: true
    reviewId?: true
    report?: true
    fileUrl?: true
    submittedAt?: true
    llmSummary?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    projectId: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date
    llmSummary: string | null
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    reviewId?: boolean
    report?: boolean
    fileUrl?: boolean
    submittedAt?: boolean
    llmSummary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    evaluations?: boolean | Submission$evaluationsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    reviewId?: boolean
    report?: boolean
    fileUrl?: boolean
    submittedAt?: boolean
    llmSummary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    reviewId?: boolean
    report?: boolean
    fileUrl?: boolean
    submittedAt?: boolean
    llmSummary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    projectId?: boolean
    reviewId?: boolean
    report?: boolean
    fileUrl?: boolean
    submittedAt?: boolean
    llmSummary?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "reviewId" | "report" | "fileUrl" | "submittedAt" | "llmSummary", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    evaluations?: boolean | Submission$evaluationsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      reviewId: string
      report: string
      fileUrl: string
      submittedAt: Date
      llmSummary: string | null
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends Submission$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly projectId: FieldRef<"Submission", 'String'>
    readonly reviewId: FieldRef<"Submission", 'String'>
    readonly report: FieldRef<"Submission", 'String'>
    readonly fileUrl: FieldRef<"Submission", 'String'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly llmSummary: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.evaluations
   */
  export type Submission$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    staffId: string | null
    comment: string | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    staffId: string | null
    comment: string | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    submissionId: number
    staffId: number
    comment: number
    _all: number
  }


  export type EvaluationMinAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    comment?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    comment?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    submissionId?: true
    staffId?: true
    comment?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: string
    submissionId: string
    staffId: string
    comment: string | null
    _count: EvaluationCountAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    comment?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    scores?: boolean | Evaluation$scoresArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    comment?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    comment?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    submissionId?: boolean
    staffId?: boolean
    comment?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "staffId" | "comment", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
    scores?: boolean | Evaluation$scoresArgs<ExtArgs>
    _count?: boolean | EvaluationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs>
      scores: Prisma.$EvaluationScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      staffId: string
      comment: string | null
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scores<T extends Evaluation$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Evaluation$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'String'>
    readonly submissionId: FieldRef<"Evaluation", 'String'>
    readonly staffId: FieldRef<"Evaluation", 'String'>
    readonly comment: FieldRef<"Evaluation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation.scores
   */
  export type Evaluation$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    where?: EvaluationScoreWhereInput
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    cursor?: EvaluationScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScoreScalarFieldEnum | EvaluationScoreScalarFieldEnum[]
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model EvaluationScore
   */

  export type AggregateEvaluationScore = {
    _count: EvaluationScoreCountAggregateOutputType | null
    _avg: EvaluationScoreAvgAggregateOutputType | null
    _sum: EvaluationScoreSumAggregateOutputType | null
    _min: EvaluationScoreMinAggregateOutputType | null
    _max: EvaluationScoreMaxAggregateOutputType | null
  }

  export type EvaluationScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type EvaluationScoreSumAggregateOutputType = {
    score: number | null
  }

  export type EvaluationScoreMinAggregateOutputType = {
    id: string | null
    evaluationId: string | null
    rubricId: string | null
    score: number | null
  }

  export type EvaluationScoreMaxAggregateOutputType = {
    id: string | null
    evaluationId: string | null
    rubricId: string | null
    score: number | null
  }

  export type EvaluationScoreCountAggregateOutputType = {
    id: number
    evaluationId: number
    rubricId: number
    score: number
    _all: number
  }


  export type EvaluationScoreAvgAggregateInputType = {
    score?: true
  }

  export type EvaluationScoreSumAggregateInputType = {
    score?: true
  }

  export type EvaluationScoreMinAggregateInputType = {
    id?: true
    evaluationId?: true
    rubricId?: true
    score?: true
  }

  export type EvaluationScoreMaxAggregateInputType = {
    id?: true
    evaluationId?: true
    rubricId?: true
    score?: true
  }

  export type EvaluationScoreCountAggregateInputType = {
    id?: true
    evaluationId?: true
    rubricId?: true
    score?: true
    _all?: true
  }

  export type EvaluationScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationScore to aggregate.
     */
    where?: EvaluationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationScores to fetch.
     */
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvaluationScores
    **/
    _count?: true | EvaluationScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationScoreMaxAggregateInputType
  }

  export type GetEvaluationScoreAggregateType<T extends EvaluationScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluationScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluationScore[P]>
      : GetScalarType<T[P], AggregateEvaluationScore[P]>
  }




  export type EvaluationScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationScoreWhereInput
    orderBy?: EvaluationScoreOrderByWithAggregationInput | EvaluationScoreOrderByWithAggregationInput[]
    by: EvaluationScoreScalarFieldEnum[] | EvaluationScoreScalarFieldEnum
    having?: EvaluationScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationScoreCountAggregateInputType | true
    _avg?: EvaluationScoreAvgAggregateInputType
    _sum?: EvaluationScoreSumAggregateInputType
    _min?: EvaluationScoreMinAggregateInputType
    _max?: EvaluationScoreMaxAggregateInputType
  }

  export type EvaluationScoreGroupByOutputType = {
    id: string
    evaluationId: string
    rubricId: string
    score: number
    _count: EvaluationScoreCountAggregateOutputType | null
    _avg: EvaluationScoreAvgAggregateOutputType | null
    _sum: EvaluationScoreSumAggregateOutputType | null
    _min: EvaluationScoreMinAggregateOutputType | null
    _max: EvaluationScoreMaxAggregateOutputType | null
  }

  type GetEvaluationScoreGroupByPayload<T extends EvaluationScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationScoreGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationScoreGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    rubricId?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationScore"]>

  export type EvaluationScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    rubricId?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationScore"]>

  export type EvaluationScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluationId?: boolean
    rubricId?: boolean
    score?: boolean
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluationScore"]>

  export type EvaluationScoreSelectScalar = {
    id?: boolean
    evaluationId?: boolean
    rubricId?: boolean
    score?: boolean
  }

  export type EvaluationScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evaluationId" | "rubricId" | "score", ExtArgs["result"]["evaluationScore"]>
  export type EvaluationScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }
  export type EvaluationScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }
  export type EvaluationScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation?: boolean | EvaluationDefaultArgs<ExtArgs>
    rubric?: boolean | RubricDefaultArgs<ExtArgs>
  }

  export type $EvaluationScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvaluationScore"
    objects: {
      evaluation: Prisma.$EvaluationPayload<ExtArgs>
      rubric: Prisma.$RubricPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evaluationId: string
      rubricId: string
      score: number
    }, ExtArgs["result"]["evaluationScore"]>
    composites: {}
  }

  type EvaluationScoreGetPayload<S extends boolean | null | undefined | EvaluationScoreDefaultArgs> = $Result.GetResult<Prisma.$EvaluationScorePayload, S>

  type EvaluationScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationScoreCountAggregateInputType | true
    }

  export interface EvaluationScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvaluationScore'], meta: { name: 'EvaluationScore' } }
    /**
     * Find zero or one EvaluationScore that matches the filter.
     * @param {EvaluationScoreFindUniqueArgs} args - Arguments to find a EvaluationScore
     * @example
     * // Get one EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationScoreFindUniqueArgs>(args: SelectSubset<T, EvaluationScoreFindUniqueArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvaluationScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationScoreFindUniqueOrThrowArgs} args - Arguments to find a EvaluationScore
     * @example
     * // Get one EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreFindFirstArgs} args - Arguments to find a EvaluationScore
     * @example
     * // Get one EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationScoreFindFirstArgs>(args?: SelectSubset<T, EvaluationScoreFindFirstArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvaluationScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreFindFirstOrThrowArgs} args - Arguments to find a EvaluationScore
     * @example
     * // Get one EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvaluationScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvaluationScores
     * const evaluationScores = await prisma.evaluationScore.findMany()
     * 
     * // Get first 10 EvaluationScores
     * const evaluationScores = await prisma.evaluationScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationScoreWithIdOnly = await prisma.evaluationScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationScoreFindManyArgs>(args?: SelectSubset<T, EvaluationScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvaluationScore.
     * @param {EvaluationScoreCreateArgs} args - Arguments to create a EvaluationScore.
     * @example
     * // Create one EvaluationScore
     * const EvaluationScore = await prisma.evaluationScore.create({
     *   data: {
     *     // ... data to create a EvaluationScore
     *   }
     * })
     * 
     */
    create<T extends EvaluationScoreCreateArgs>(args: SelectSubset<T, EvaluationScoreCreateArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvaluationScores.
     * @param {EvaluationScoreCreateManyArgs} args - Arguments to create many EvaluationScores.
     * @example
     * // Create many EvaluationScores
     * const evaluationScore = await prisma.evaluationScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationScoreCreateManyArgs>(args?: SelectSubset<T, EvaluationScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvaluationScores and returns the data saved in the database.
     * @param {EvaluationScoreCreateManyAndReturnArgs} args - Arguments to create many EvaluationScores.
     * @example
     * // Create many EvaluationScores
     * const evaluationScore = await prisma.evaluationScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvaluationScores and only return the `id`
     * const evaluationScoreWithIdOnly = await prisma.evaluationScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvaluationScore.
     * @param {EvaluationScoreDeleteArgs} args - Arguments to delete one EvaluationScore.
     * @example
     * // Delete one EvaluationScore
     * const EvaluationScore = await prisma.evaluationScore.delete({
     *   where: {
     *     // ... filter to delete one EvaluationScore
     *   }
     * })
     * 
     */
    delete<T extends EvaluationScoreDeleteArgs>(args: SelectSubset<T, EvaluationScoreDeleteArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvaluationScore.
     * @param {EvaluationScoreUpdateArgs} args - Arguments to update one EvaluationScore.
     * @example
     * // Update one EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationScoreUpdateArgs>(args: SelectSubset<T, EvaluationScoreUpdateArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvaluationScores.
     * @param {EvaluationScoreDeleteManyArgs} args - Arguments to filter EvaluationScores to delete.
     * @example
     * // Delete a few EvaluationScores
     * const { count } = await prisma.evaluationScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationScoreDeleteManyArgs>(args?: SelectSubset<T, EvaluationScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvaluationScores
     * const evaluationScore = await prisma.evaluationScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationScoreUpdateManyArgs>(args: SelectSubset<T, EvaluationScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationScores and returns the data updated in the database.
     * @param {EvaluationScoreUpdateManyAndReturnArgs} args - Arguments to update many EvaluationScores.
     * @example
     * // Update many EvaluationScores
     * const evaluationScore = await prisma.evaluationScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvaluationScores and only return the `id`
     * const evaluationScoreWithIdOnly = await prisma.evaluationScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvaluationScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvaluationScore.
     * @param {EvaluationScoreUpsertArgs} args - Arguments to update or create a EvaluationScore.
     * @example
     * // Update or create a EvaluationScore
     * const evaluationScore = await prisma.evaluationScore.upsert({
     *   create: {
     *     // ... data to create a EvaluationScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvaluationScore we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationScoreUpsertArgs>(args: SelectSubset<T, EvaluationScoreUpsertArgs<ExtArgs>>): Prisma__EvaluationScoreClient<$Result.GetResult<Prisma.$EvaluationScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvaluationScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreCountArgs} args - Arguments to filter EvaluationScores to count.
     * @example
     * // Count the number of EvaluationScores
     * const count = await prisma.evaluationScore.count({
     *   where: {
     *     // ... the filter for the EvaluationScores we want to count
     *   }
     * })
    **/
    count<T extends EvaluationScoreCountArgs>(
      args?: Subset<T, EvaluationScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvaluationScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationScoreAggregateArgs>(args: Subset<T, EvaluationScoreAggregateArgs>): Prisma.PrismaPromise<GetEvaluationScoreAggregateType<T>>

    /**
     * Group by EvaluationScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationScoreGroupByArgs} args - Group by arguments.
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
      T extends EvaluationScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationScoreGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvaluationScore model
   */
  readonly fields: EvaluationScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvaluationScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation<T extends EvaluationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvaluationDefaultArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rubric<T extends RubricDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RubricDefaultArgs<ExtArgs>>): Prisma__RubricClient<$Result.GetResult<Prisma.$RubricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EvaluationScore model
   */
  interface EvaluationScoreFieldRefs {
    readonly id: FieldRef<"EvaluationScore", 'String'>
    readonly evaluationId: FieldRef<"EvaluationScore", 'String'>
    readonly rubricId: FieldRef<"EvaluationScore", 'String'>
    readonly score: FieldRef<"EvaluationScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EvaluationScore findUnique
   */
  export type EvaluationScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationScore to fetch.
     */
    where: EvaluationScoreWhereUniqueInput
  }

  /**
   * EvaluationScore findUniqueOrThrow
   */
  export type EvaluationScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationScore to fetch.
     */
    where: EvaluationScoreWhereUniqueInput
  }

  /**
   * EvaluationScore findFirst
   */
  export type EvaluationScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationScore to fetch.
     */
    where?: EvaluationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationScores to fetch.
     */
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationScores.
     */
    cursor?: EvaluationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationScores.
     */
    distinct?: EvaluationScoreScalarFieldEnum | EvaluationScoreScalarFieldEnum[]
  }

  /**
   * EvaluationScore findFirstOrThrow
   */
  export type EvaluationScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationScore to fetch.
     */
    where?: EvaluationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationScores to fetch.
     */
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationScores.
     */
    cursor?: EvaluationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationScores.
     */
    distinct?: EvaluationScoreScalarFieldEnum | EvaluationScoreScalarFieldEnum[]
  }

  /**
   * EvaluationScore findMany
   */
  export type EvaluationScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter, which EvaluationScores to fetch.
     */
    where?: EvaluationScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationScores to fetch.
     */
    orderBy?: EvaluationScoreOrderByWithRelationInput | EvaluationScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvaluationScores.
     */
    cursor?: EvaluationScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationScores.
     */
    skip?: number
    distinct?: EvaluationScoreScalarFieldEnum | EvaluationScoreScalarFieldEnum[]
  }

  /**
   * EvaluationScore create
   */
  export type EvaluationScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a EvaluationScore.
     */
    data: XOR<EvaluationScoreCreateInput, EvaluationScoreUncheckedCreateInput>
  }

  /**
   * EvaluationScore createMany
   */
  export type EvaluationScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvaluationScores.
     */
    data: EvaluationScoreCreateManyInput | EvaluationScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationScore createManyAndReturn
   */
  export type EvaluationScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * The data used to create many EvaluationScores.
     */
    data: EvaluationScoreCreateManyInput | EvaluationScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationScore update
   */
  export type EvaluationScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a EvaluationScore.
     */
    data: XOR<EvaluationScoreUpdateInput, EvaluationScoreUncheckedUpdateInput>
    /**
     * Choose, which EvaluationScore to update.
     */
    where: EvaluationScoreWhereUniqueInput
  }

  /**
   * EvaluationScore updateMany
   */
  export type EvaluationScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvaluationScores.
     */
    data: XOR<EvaluationScoreUpdateManyMutationInput, EvaluationScoreUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationScores to update
     */
    where?: EvaluationScoreWhereInput
    /**
     * Limit how many EvaluationScores to update.
     */
    limit?: number
  }

  /**
   * EvaluationScore updateManyAndReturn
   */
  export type EvaluationScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * The data used to update EvaluationScores.
     */
    data: XOR<EvaluationScoreUpdateManyMutationInput, EvaluationScoreUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationScores to update
     */
    where?: EvaluationScoreWhereInput
    /**
     * Limit how many EvaluationScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvaluationScore upsert
   */
  export type EvaluationScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the EvaluationScore to update in case it exists.
     */
    where: EvaluationScoreWhereUniqueInput
    /**
     * In case the EvaluationScore found by the `where` argument doesn't exist, create a new EvaluationScore with this data.
     */
    create: XOR<EvaluationScoreCreateInput, EvaluationScoreUncheckedCreateInput>
    /**
     * In case the EvaluationScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationScoreUpdateInput, EvaluationScoreUncheckedUpdateInput>
  }

  /**
   * EvaluationScore delete
   */
  export type EvaluationScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
    /**
     * Filter which EvaluationScore to delete.
     */
    where: EvaluationScoreWhereUniqueInput
  }

  /**
   * EvaluationScore deleteMany
   */
  export type EvaluationScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationScores to delete
     */
    where?: EvaluationScoreWhereInput
    /**
     * Limit how many EvaluationScores to delete.
     */
    limit?: number
  }

  /**
   * EvaluationScore without action
   */
  export type EvaluationScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationScore
     */
    select?: EvaluationScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvaluationScore
     */
    omit?: EvaluationScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationScoreInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    rollNumber: 'rollNumber',
    classId: 'classId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalSemesters: 'totalSemesters'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    departmentId: 'departmentId',
    graduationYear: 'graduationYear'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    section: 'section'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    departmentId: 'departmentId',
    semester: 'semester'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const TeachingAssignmentScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    subjectId: 'subjectId',
    classId: 'classId'
  };

  export type TeachingAssignmentScalarFieldEnum = (typeof TeachingAssignmentScalarFieldEnum)[keyof typeof TeachingAssignmentScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    classId: 'classId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    groupId: 'groupId',
    userId: 'userId'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    githubRepo: 'githubRepo',
    groupId: 'groupId',
    proposedTitle: 'proposedTitle',
    titleStatus: 'titleStatus',
    titleProposalDeadline: 'titleProposalDeadline'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectSubjectScalarFieldEnum: {
    projectId: 'projectId',
    subjectId: 'subjectId'
  };

  export type ProjectSubjectScalarFieldEnum = (typeof ProjectSubjectScalarFieldEnum)[keyof typeof ProjectSubjectScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deadline: 'deadline'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const RubricScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    criterion: 'criterion',
    maxScore: 'maxScore'
  };

  export type RubricScalarFieldEnum = (typeof RubricScalarFieldEnum)[keyof typeof RubricScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    reviewId: 'reviewId',
    report: 'report',
    fileUrl: 'fileUrl',
    submittedAt: 'submittedAt',
    llmSummary: 'llmSummary'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    staffId: 'staffId',
    comment: 'comment'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const EvaluationScoreScalarFieldEnum: {
    id: 'id',
    evaluationId: 'evaluationId',
    rubricId: 'rubricId',
    score: 'score'
  };

  export type EvaluationScoreScalarFieldEnum = (typeof EvaluationScoreScalarFieldEnum)[keyof typeof EvaluationScoreScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TitleStatus'
   */
  export type EnumTitleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TitleStatus'>
    


  /**
   * Reference to a field of type 'TitleStatus[]'
   */
  export type ListEnumTitleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TitleStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rollNumber?: StringNullableFilter<"User"> | string | null
    classId?: StringNullableFilter<"User"> | string | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    teachingAssignments?: TeachingAssignmentListRelationFilter
    groups?: GroupMemberListRelationFilter
    evaluations?: EvaluationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    rollNumber?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    class?: ClassOrderByWithRelationInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    groups?: GroupMemberOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    rollNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    classId?: StringNullableFilter<"User"> | string | null
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    teachingAssignments?: TeachingAssignmentListRelationFilter
    groups?: GroupMemberListRelationFilter
    evaluations?: EvaluationListRelationFilter
  }, "id" | "email" | "rollNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    rollNumber?: SortOrderInput | SortOrder
    classId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    rollNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    classId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    totalSemesters?: IntFilter<"Department"> | number
    batches?: BatchListRelationFilter
    subjects?: SubjectListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalSemesters?: SortOrder
    batches?: BatchOrderByRelationAggregateInput
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    totalSemesters?: IntFilter<"Department"> | number
    batches?: BatchListRelationFilter
    subjects?: SubjectListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalSemesters?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    totalSemesters?: IntWithAggregatesFilter<"Department"> | number
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    departmentId?: StringFilter<"Batch"> | string
    graduationYear?: IntFilter<"Batch"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    classes?: ClassListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    graduationYear?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    classes?: ClassOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    departmentId_graduationYear?: BatchDepartmentIdGraduationYearCompoundUniqueInput
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    departmentId?: StringFilter<"Batch"> | string
    graduationYear?: IntFilter<"Batch"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    classes?: ClassListRelationFilter
  }, "id" | "departmentId_graduationYear">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    graduationYear?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _avg?: BatchAvgOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
    _sum?: BatchSumOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    departmentId?: StringWithAggregatesFilter<"Batch"> | string
    graduationYear?: IntWithAggregatesFilter<"Batch"> | number
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    batchId?: StringFilter<"Class"> | string
    section?: StringFilter<"Class"> | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    students?: UserListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    groups?: GroupListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    section?: SortOrder
    batch?: BatchOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchId_section?: ClassBatchIdSectionCompoundUniqueInput
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    batchId?: StringFilter<"Class"> | string
    section?: StringFilter<"Class"> | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    students?: UserListRelationFilter
    teachingAssignments?: TeachingAssignmentListRelationFilter
    groups?: GroupListRelationFilter
  }, "id" | "batchId_section">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    section?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    batchId?: StringWithAggregatesFilter<"Class"> | string
    section?: StringWithAggregatesFilter<"Class"> | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    departmentId?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    teachingAssignments?: TeachingAssignmentListRelationFilter
    projectSubjects?: ProjectSubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    semester?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    teachingAssignments?: TeachingAssignmentOrderByRelationAggregateInput
    projectSubjects?: ProjectSubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    departmentId?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    teachingAssignments?: TeachingAssignmentListRelationFilter
    projectSubjects?: ProjectSubjectListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    semester?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    departmentId?: StringWithAggregatesFilter<"Subject"> | string
    semester?: IntWithAggregatesFilter<"Subject"> | number
  }

  export type TeachingAssignmentWhereInput = {
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    staffId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    classId?: StringFilter<"TeachingAssignment"> | string
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type TeachingAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    subjectId?: SortOrder
    classId?: SortOrder
    staff?: UserOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type TeachingAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staffId_subjectId_classId?: TeachingAssignmentStaffIdSubjectIdClassIdCompoundUniqueInput
    AND?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    OR?: TeachingAssignmentWhereInput[]
    NOT?: TeachingAssignmentWhereInput | TeachingAssignmentWhereInput[]
    staffId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    classId?: StringFilter<"TeachingAssignment"> | string
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id" | "staffId_subjectId_classId">

  export type TeachingAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    subjectId?: SortOrder
    classId?: SortOrder
    _count?: TeachingAssignmentCountOrderByAggregateInput
    _max?: TeachingAssignmentMaxOrderByAggregateInput
    _min?: TeachingAssignmentMinOrderByAggregateInput
  }

  export type TeachingAssignmentScalarWhereWithAggregatesInput = {
    AND?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    OR?: TeachingAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TeachingAssignmentScalarWhereWithAggregatesInput | TeachingAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    staffId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    subjectId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
    classId?: StringWithAggregatesFilter<"TeachingAssignment"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    classId?: StringFilter<"Group"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    members?: GroupMemberListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    class?: ClassOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    classId?: StringFilter<"Group"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    members?: GroupMemberListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    classId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    githubRepo?: StringNullableFilter<"Project"> | string | null
    groupId?: StringFilter<"Project"> | string
    proposedTitle?: StringNullableFilter<"Project"> | string | null
    titleStatus?: EnumTitleStatusNullableFilter<"Project"> | $Enums.TitleStatus | null
    titleProposalDeadline?: DateTimeNullableFilter<"Project"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    subjects?: ProjectSubjectListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    githubRepo?: SortOrderInput | SortOrder
    groupId?: SortOrder
    proposedTitle?: SortOrderInput | SortOrder
    titleStatus?: SortOrderInput | SortOrder
    titleProposalDeadline?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    subjects?: ProjectSubjectOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    githubRepo?: StringNullableFilter<"Project"> | string | null
    groupId?: StringFilter<"Project"> | string
    proposedTitle?: StringNullableFilter<"Project"> | string | null
    titleStatus?: EnumTitleStatusNullableFilter<"Project"> | $Enums.TitleStatus | null
    titleProposalDeadline?: DateTimeNullableFilter<"Project"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    subjects?: ProjectSubjectListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    githubRepo?: SortOrderInput | SortOrder
    groupId?: SortOrder
    proposedTitle?: SortOrderInput | SortOrder
    titleStatus?: SortOrderInput | SortOrder
    titleProposalDeadline?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubRepo?: StringNullableWithAggregatesFilter<"Project"> | string | null
    groupId?: StringWithAggregatesFilter<"Project"> | string
    proposedTitle?: StringNullableWithAggregatesFilter<"Project"> | string | null
    titleStatus?: EnumTitleStatusNullableWithAggregatesFilter<"Project"> | $Enums.TitleStatus | null
    titleProposalDeadline?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type ProjectSubjectWhereInput = {
    AND?: ProjectSubjectWhereInput | ProjectSubjectWhereInput[]
    OR?: ProjectSubjectWhereInput[]
    NOT?: ProjectSubjectWhereInput | ProjectSubjectWhereInput[]
    projectId?: StringFilter<"ProjectSubject"> | string
    subjectId?: StringFilter<"ProjectSubject"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type ProjectSubjectOrderByWithRelationInput = {
    projectId?: SortOrder
    subjectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type ProjectSubjectWhereUniqueInput = Prisma.AtLeast<{
    projectId_subjectId?: ProjectSubjectProjectIdSubjectIdCompoundUniqueInput
    AND?: ProjectSubjectWhereInput | ProjectSubjectWhereInput[]
    OR?: ProjectSubjectWhereInput[]
    NOT?: ProjectSubjectWhereInput | ProjectSubjectWhereInput[]
    projectId?: StringFilter<"ProjectSubject"> | string
    subjectId?: StringFilter<"ProjectSubject"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "projectId_subjectId">

  export type ProjectSubjectOrderByWithAggregationInput = {
    projectId?: SortOrder
    subjectId?: SortOrder
    _count?: ProjectSubjectCountOrderByAggregateInput
    _max?: ProjectSubjectMaxOrderByAggregateInput
    _min?: ProjectSubjectMinOrderByAggregateInput
  }

  export type ProjectSubjectScalarWhereWithAggregatesInput = {
    AND?: ProjectSubjectScalarWhereWithAggregatesInput | ProjectSubjectScalarWhereWithAggregatesInput[]
    OR?: ProjectSubjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectSubjectScalarWhereWithAggregatesInput | ProjectSubjectScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<"ProjectSubject"> | string
    subjectId?: StringWithAggregatesFilter<"ProjectSubject"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    name?: StringFilter<"Review"> | string
    deadline?: DateTimeFilter<"Review"> | Date | string
    rubrics?: RubricListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deadline?: SortOrder
    rubrics?: RubricOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    name?: StringFilter<"Review"> | string
    deadline?: DateTimeFilter<"Review"> | Date | string
    rubrics?: RubricListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deadline?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    name?: StringWithAggregatesFilter<"Review"> | string
    deadline?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type RubricWhereInput = {
    AND?: RubricWhereInput | RubricWhereInput[]
    OR?: RubricWhereInput[]
    NOT?: RubricWhereInput | RubricWhereInput[]
    id?: StringFilter<"Rubric"> | string
    reviewId?: StringFilter<"Rubric"> | string
    criterion?: StringFilter<"Rubric"> | string
    maxScore?: IntFilter<"Rubric"> | number
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    evaluationScores?: EvaluationScoreListRelationFilter
  }

  export type RubricOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    criterion?: SortOrder
    maxScore?: SortOrder
    review?: ReviewOrderByWithRelationInput
    evaluationScores?: EvaluationScoreOrderByRelationAggregateInput
  }

  export type RubricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RubricWhereInput | RubricWhereInput[]
    OR?: RubricWhereInput[]
    NOT?: RubricWhereInput | RubricWhereInput[]
    reviewId?: StringFilter<"Rubric"> | string
    criterion?: StringFilter<"Rubric"> | string
    maxScore?: IntFilter<"Rubric"> | number
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    evaluationScores?: EvaluationScoreListRelationFilter
  }, "id">

  export type RubricOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    criterion?: SortOrder
    maxScore?: SortOrder
    _count?: RubricCountOrderByAggregateInput
    _avg?: RubricAvgOrderByAggregateInput
    _max?: RubricMaxOrderByAggregateInput
    _min?: RubricMinOrderByAggregateInput
    _sum?: RubricSumOrderByAggregateInput
  }

  export type RubricScalarWhereWithAggregatesInput = {
    AND?: RubricScalarWhereWithAggregatesInput | RubricScalarWhereWithAggregatesInput[]
    OR?: RubricScalarWhereWithAggregatesInput[]
    NOT?: RubricScalarWhereWithAggregatesInput | RubricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rubric"> | string
    reviewId?: StringWithAggregatesFilter<"Rubric"> | string
    criterion?: StringWithAggregatesFilter<"Rubric"> | string
    maxScore?: IntWithAggregatesFilter<"Rubric"> | number
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    projectId?: StringFilter<"Submission"> | string
    reviewId?: StringFilter<"Submission"> | string
    report?: StringFilter<"Submission"> | string
    fileUrl?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    llmSummary?: StringNullableFilter<"Submission"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    evaluations?: EvaluationListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    reviewId?: SortOrder
    report?: SortOrder
    fileUrl?: SortOrder
    submittedAt?: SortOrder
    llmSummary?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    evaluations?: EvaluationOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    projectId?: StringFilter<"Submission"> | string
    reviewId?: StringFilter<"Submission"> | string
    report?: StringFilter<"Submission"> | string
    fileUrl?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    llmSummary?: StringNullableFilter<"Submission"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    evaluations?: EvaluationListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    reviewId?: SortOrder
    report?: SortOrder
    fileUrl?: SortOrder
    submittedAt?: SortOrder
    llmSummary?: SortOrderInput | SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    projectId?: StringWithAggregatesFilter<"Submission"> | string
    reviewId?: StringWithAggregatesFilter<"Submission"> | string
    report?: StringWithAggregatesFilter<"Submission"> | string
    fileUrl?: StringWithAggregatesFilter<"Submission"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    llmSummary?: StringNullableWithAggregatesFilter<"Submission"> | string | null
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    submissionId?: StringFilter<"Evaluation"> | string
    staffId?: StringFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    scores?: EvaluationScoreListRelationFilter
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    comment?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
    scores?: EvaluationScoreOrderByRelationAggregateInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    submissionId?: StringFilter<"Evaluation"> | string
    staffId?: StringFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    scores?: EvaluationScoreListRelationFilter
  }, "id">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evaluation"> | string
    submissionId?: StringWithAggregatesFilter<"Evaluation"> | string
    staffId?: StringWithAggregatesFilter<"Evaluation"> | string
    comment?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
  }

  export type EvaluationScoreWhereInput = {
    AND?: EvaluationScoreWhereInput | EvaluationScoreWhereInput[]
    OR?: EvaluationScoreWhereInput[]
    NOT?: EvaluationScoreWhereInput | EvaluationScoreWhereInput[]
    id?: StringFilter<"EvaluationScore"> | string
    evaluationId?: StringFilter<"EvaluationScore"> | string
    rubricId?: StringFilter<"EvaluationScore"> | string
    score?: IntFilter<"EvaluationScore"> | number
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    rubric?: XOR<RubricScalarRelationFilter, RubricWhereInput>
  }

  export type EvaluationScoreOrderByWithRelationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    rubricId?: SortOrder
    score?: SortOrder
    evaluation?: EvaluationOrderByWithRelationInput
    rubric?: RubricOrderByWithRelationInput
  }

  export type EvaluationScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvaluationScoreWhereInput | EvaluationScoreWhereInput[]
    OR?: EvaluationScoreWhereInput[]
    NOT?: EvaluationScoreWhereInput | EvaluationScoreWhereInput[]
    evaluationId?: StringFilter<"EvaluationScore"> | string
    rubricId?: StringFilter<"EvaluationScore"> | string
    score?: IntFilter<"EvaluationScore"> | number
    evaluation?: XOR<EvaluationScalarRelationFilter, EvaluationWhereInput>
    rubric?: XOR<RubricScalarRelationFilter, RubricWhereInput>
  }, "id">

  export type EvaluationScoreOrderByWithAggregationInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    rubricId?: SortOrder
    score?: SortOrder
    _count?: EvaluationScoreCountOrderByAggregateInput
    _avg?: EvaluationScoreAvgOrderByAggregateInput
    _max?: EvaluationScoreMaxOrderByAggregateInput
    _min?: EvaluationScoreMinOrderByAggregateInput
    _sum?: EvaluationScoreSumOrderByAggregateInput
  }

  export type EvaluationScoreScalarWhereWithAggregatesInput = {
    AND?: EvaluationScoreScalarWhereWithAggregatesInput | EvaluationScoreScalarWhereWithAggregatesInput[]
    OR?: EvaluationScoreScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScoreScalarWhereWithAggregatesInput | EvaluationScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvaluationScore"> | string
    evaluationId?: StringWithAggregatesFilter<"EvaluationScore"> | string
    rubricId?: StringWithAggregatesFilter<"EvaluationScore"> | string
    score?: IntWithAggregatesFilter<"EvaluationScore"> | number
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    class?: ClassCreateNestedOneWithoutStudentsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutStaffInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    classId?: string | null
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutStaffInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneWithoutStudentsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    classId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    totalSemesters: number
    batches?: BatchCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    totalSemesters: number
    batches?: BatchUncheckedCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    batches?: BatchUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    batches?: BatchUncheckedUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    totalSemesters: number
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
  }

  export type BatchCreateInput = {
    id?: string
    graduationYear: number
    department: DepartmentCreateNestedOneWithoutBatchesInput
    classes?: ClassCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    departmentId: string
    graduationYear: number
    classes?: ClassUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutBatchesNestedInput
    classes?: ClassUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    classes?: ClassUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    departmentId: string
    graduationYear: number
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateInput = {
    id?: string
    section: string
    batch: BatchCreateNestedOneWithoutClassesInput
    students?: UserCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutClassInput
    groups?: GroupCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    batchId: string
    section: string
    students?: UserUncheckedCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutClassInput
    groups?: GroupUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    batch?: BatchUpdateOneRequiredWithoutClassesNestedInput
    students?: UserUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutClassNestedInput
    groups?: GroupUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutClassNestedInput
    groups?: GroupUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    batchId: string
    section: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    semester: number
    department: DepartmentCreateNestedOneWithoutSubjectsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutSubjectInput
    projectSubjects?: ProjectSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    departmentId: string
    semester: number
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput
    projectSubjects?: ProjectSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutSubjectsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutSubjectNestedInput
    projectSubjects?: ProjectSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    projectSubjects?: ProjectSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    departmentId: string
    semester: number
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type TeachingAssignmentCreateInput = {
    id?: string
    staff: UserCreateNestedOneWithoutTeachingAssignmentsInput
    subject: SubjectCreateNestedOneWithoutTeachingAssignmentsInput
    class: ClassCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateInput = {
    id?: string
    staffId: string
    subjectId: string
    classId: string
  }

  export type TeachingAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff?: UserUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentCreateManyInput = {
    id?: string
    staffId: string
    subjectId: string
    classId: string
  }

  export type TeachingAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    class: ClassCreateNestedOneWithoutGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    projects?: ProjectCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    classId: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    projects?: ProjectUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    projects?: ProjectUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    classId: string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateInput = {
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberUpdateInput = {
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberUpdateManyMutationInput = {

  }

  export type GroupMemberUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    group: GroupCreateNestedOneWithoutProjectsInput
    subjects?: ProjectSubjectCreateNestedManyWithoutProjectInput
    submissions?: SubmissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    groupId: string
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    subjects?: ProjectSubjectUncheckedCreateNestedManyWithoutProjectInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutProjectsNestedInput
    subjects?: ProjectSubjectUpdateManyWithoutProjectNestedInput
    submissions?: SubmissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: ProjectSubjectUncheckedUpdateManyWithoutProjectNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    groupId: string
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectSubjectCreateInput = {
    project: ProjectCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutProjectSubjectsInput
  }

  export type ProjectSubjectUncheckedCreateInput = {
    projectId: string
    subjectId: string
  }

  export type ProjectSubjectUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutProjectSubjectsNestedInput
  }

  export type ProjectSubjectUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSubjectCreateManyInput = {
    projectId: string
    subjectId: string
  }

  export type ProjectSubjectUpdateManyMutationInput = {

  }

  export type ProjectSubjectUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    name: string
    deadline: Date | string
    rubrics?: RubricCreateNestedManyWithoutReviewInput
    submissions?: SubmissionCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    name: string
    deadline: Date | string
    rubrics?: RubricUncheckedCreateNestedManyWithoutReviewInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    rubrics?: RubricUpdateManyWithoutReviewNestedInput
    submissions?: SubmissionUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    rubrics?: RubricUncheckedUpdateManyWithoutReviewNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    name: string
    deadline: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RubricCreateInput = {
    id?: string
    criterion: string
    maxScore: number
    review: ReviewCreateNestedOneWithoutRubricsInput
    evaluationScores?: EvaluationScoreCreateNestedManyWithoutRubricInput
  }

  export type RubricUncheckedCreateInput = {
    id?: string
    reviewId: string
    criterion: string
    maxScore: number
    evaluationScores?: EvaluationScoreUncheckedCreateNestedManyWithoutRubricInput
  }

  export type RubricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateOneRequiredWithoutRubricsNestedInput
    evaluationScores?: EvaluationScoreUpdateManyWithoutRubricNestedInput
  }

  export type RubricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
    evaluationScores?: EvaluationScoreUncheckedUpdateManyWithoutRubricNestedInput
  }

  export type RubricCreateManyInput = {
    id?: string
    reviewId: string
    criterion: string
    maxScore: number
  }

  export type RubricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
  }

  export type RubricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionCreateInput = {
    id?: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    project: ProjectCreateNestedOneWithoutSubmissionsInput
    review: ReviewCreateNestedOneWithoutSubmissionsInput
    evaluations?: EvaluationCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    projectId: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutSubmissionsNestedInput
    review?: ReviewUpdateOneRequiredWithoutSubmissionsNestedInput
    evaluations?: EvaluationUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    projectId: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationCreateInput = {
    id?: string
    comment?: string | null
    submission: SubmissionCreateNestedOneWithoutEvaluationsInput
    staff: UserCreateNestedOneWithoutEvaluationsInput
    scores?: EvaluationScoreCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: string
    submissionId: string
    staffId: string
    comment?: string | null
    scores?: EvaluationScoreUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutEvaluationsNestedInput
    staff?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    scores?: EvaluationScoreUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: EvaluationScoreUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationCreateManyInput = {
    id?: string
    submissionId: string
    staffId: string
    comment?: string | null
  }

  export type EvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationScoreCreateInput = {
    id?: string
    score: number
    evaluation: EvaluationCreateNestedOneWithoutScoresInput
    rubric: RubricCreateNestedOneWithoutEvaluationScoresInput
  }

  export type EvaluationScoreUncheckedCreateInput = {
    id?: string
    evaluationId: string
    rubricId: string
    score: number
  }

  export type EvaluationScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    evaluation?: EvaluationUpdateOneRequiredWithoutScoresNestedInput
    rubric?: RubricUpdateOneRequiredWithoutEvaluationScoresNestedInput
  }

  export type EvaluationScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationId?: StringFieldUpdateOperationsInput | string
    rubricId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationScoreCreateManyInput = {
    id?: string
    evaluationId: string
    rubricId: string
    score: number
  }

  export type EvaluationScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationId?: StringFieldUpdateOperationsInput | string
    rubricId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type TeachingAssignmentListRelationFilter = {
    every?: TeachingAssignmentWhereInput
    some?: TeachingAssignmentWhereInput
    none?: TeachingAssignmentWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeachingAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    rollNumber?: SortOrder
    classId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    rollNumber?: SortOrder
    classId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    rollNumber?: SortOrder
    classId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalSemesters?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    totalSemesters?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalSemesters?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalSemesters?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    totalSemesters?: SortOrder
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

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchDepartmentIdGraduationYearCompoundUniqueInput = {
    departmentId: string
    graduationYear: number
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    graduationYear?: SortOrder
  }

  export type BatchAvgOrderByAggregateInput = {
    graduationYear?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    graduationYear?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    graduationYear?: SortOrder
  }

  export type BatchSumOrderByAggregateInput = {
    graduationYear?: SortOrder
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassBatchIdSectionCompoundUniqueInput = {
    batchId: string
    section: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    section?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    section?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    section?: SortOrder
  }

  export type ProjectSubjectListRelationFilter = {
    every?: ProjectSubjectWhereInput
    some?: ProjectSubjectWhereInput
    none?: ProjectSubjectWhereInput
  }

  export type ProjectSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    semester?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    semester?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    semester?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type TeachingAssignmentStaffIdSubjectIdClassIdCompoundUniqueInput = {
    staffId: string
    subjectId: string
    classId: string
  }

  export type TeachingAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    subjectId?: SortOrder
    classId?: SortOrder
  }

  export type TeachingAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    subjectId?: SortOrder
    classId?: SortOrder
  }

  export type TeachingAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    subjectId?: SortOrder
    classId?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    classId?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTitleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TitleStatus | EnumTitleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTitleStatusNullableFilter<$PrismaModel> | $Enums.TitleStatus | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubRepo?: SortOrder
    groupId?: SortOrder
    proposedTitle?: SortOrder
    titleStatus?: SortOrder
    titleProposalDeadline?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubRepo?: SortOrder
    groupId?: SortOrder
    proposedTitle?: SortOrder
    titleStatus?: SortOrder
    titleProposalDeadline?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    githubRepo?: SortOrder
    groupId?: SortOrder
    proposedTitle?: SortOrder
    titleStatus?: SortOrder
    titleProposalDeadline?: SortOrder
  }

  export type EnumTitleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TitleStatus | EnumTitleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTitleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TitleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTitleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTitleStatusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectSubjectProjectIdSubjectIdCompoundUniqueInput = {
    projectId: string
    subjectId: string
  }

  export type ProjectSubjectCountOrderByAggregateInput = {
    projectId?: SortOrder
    subjectId?: SortOrder
  }

  export type ProjectSubjectMaxOrderByAggregateInput = {
    projectId?: SortOrder
    subjectId?: SortOrder
  }

  export type ProjectSubjectMinOrderByAggregateInput = {
    projectId?: SortOrder
    subjectId?: SortOrder
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

  export type RubricListRelationFilter = {
    every?: RubricWhereInput
    some?: RubricWhereInput
    none?: RubricWhereInput
  }

  export type RubricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deadline?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deadline?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deadline?: SortOrder
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

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type EvaluationScoreListRelationFilter = {
    every?: EvaluationScoreWhereInput
    some?: EvaluationScoreWhereInput
    none?: EvaluationScoreWhereInput
  }

  export type EvaluationScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RubricCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    criterion?: SortOrder
    maxScore?: SortOrder
  }

  export type RubricAvgOrderByAggregateInput = {
    maxScore?: SortOrder
  }

  export type RubricMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    criterion?: SortOrder
    maxScore?: SortOrder
  }

  export type RubricMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    criterion?: SortOrder
    maxScore?: SortOrder
  }

  export type RubricSumOrderByAggregateInput = {
    maxScore?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    reviewId?: SortOrder
    report?: SortOrder
    fileUrl?: SortOrder
    submittedAt?: SortOrder
    llmSummary?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    reviewId?: SortOrder
    report?: SortOrder
    fileUrl?: SortOrder
    submittedAt?: SortOrder
    llmSummary?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    reviewId?: SortOrder
    report?: SortOrder
    fileUrl?: SortOrder
    submittedAt?: SortOrder
    llmSummary?: SortOrder
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    comment?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    comment?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    staffId?: SortOrder
    comment?: SortOrder
  }

  export type EvaluationScalarRelationFilter = {
    is?: EvaluationWhereInput
    isNot?: EvaluationWhereInput
  }

  export type RubricScalarRelationFilter = {
    is?: RubricWhereInput
    isNot?: RubricWhereInput
  }

  export type EvaluationScoreCountOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    rubricId?: SortOrder
    score?: SortOrder
  }

  export type EvaluationScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EvaluationScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    rubricId?: SortOrder
    score?: SortOrder
  }

  export type EvaluationScoreMinOrderByAggregateInput = {
    id?: SortOrder
    evaluationId?: SortOrder
    rubricId?: SortOrder
    score?: SortOrder
  }

  export type EvaluationScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type TeachingAssignmentCreateNestedManyWithoutStaffInput = {
    create?: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput> | TeachingAssignmentCreateWithoutStaffInput[] | TeachingAssignmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutStaffInput | TeachingAssignmentCreateOrConnectWithoutStaffInput[]
    createMany?: TeachingAssignmentCreateManyStaffInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutStaffInput = {
    create?: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput> | EvaluationCreateWithoutStaffInput[] | EvaluationUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStaffInput | EvaluationCreateOrConnectWithoutStaffInput[]
    createMany?: EvaluationCreateManyStaffInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput> | TeachingAssignmentCreateWithoutStaffInput[] | TeachingAssignmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutStaffInput | TeachingAssignmentCreateOrConnectWithoutStaffInput[]
    createMany?: TeachingAssignmentCreateManyStaffInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput> | EvaluationCreateWithoutStaffInput[] | EvaluationUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStaffInput | EvaluationCreateOrConnectWithoutStaffInput[]
    createMany?: EvaluationCreateManyStaffInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClassUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type TeachingAssignmentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput> | TeachingAssignmentCreateWithoutStaffInput[] | TeachingAssignmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutStaffInput | TeachingAssignmentCreateOrConnectWithoutStaffInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutStaffInput | TeachingAssignmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: TeachingAssignmentCreateManyStaffInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutStaffInput | TeachingAssignmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutStaffInput | TeachingAssignmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutStaffNestedInput = {
    create?: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput> | EvaluationCreateWithoutStaffInput[] | EvaluationUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStaffInput | EvaluationCreateOrConnectWithoutStaffInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutStaffInput | EvaluationUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: EvaluationCreateManyStaffInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutStaffInput | EvaluationUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutStaffInput | EvaluationUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput> | TeachingAssignmentCreateWithoutStaffInput[] | TeachingAssignmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutStaffInput | TeachingAssignmentCreateOrConnectWithoutStaffInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutStaffInput | TeachingAssignmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: TeachingAssignmentCreateManyStaffInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutStaffInput | TeachingAssignmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutStaffInput | TeachingAssignmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput> | EvaluationCreateWithoutStaffInput[] | EvaluationUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStaffInput | EvaluationCreateOrConnectWithoutStaffInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutStaffInput | EvaluationUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: EvaluationCreateManyStaffInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutStaffInput | EvaluationUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutStaffInput | EvaluationUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type BatchCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput> | BatchCreateWithoutDepartmentInput[] | BatchUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutDepartmentInput | BatchCreateOrConnectWithoutDepartmentInput[]
    createMany?: BatchCreateManyDepartmentInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput> | BatchCreateWithoutDepartmentInput[] | BatchUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutDepartmentInput | BatchCreateOrConnectWithoutDepartmentInput[]
    createMany?: BatchCreateManyDepartmentInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BatchUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput> | BatchCreateWithoutDepartmentInput[] | BatchUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutDepartmentInput | BatchCreateOrConnectWithoutDepartmentInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutDepartmentInput | BatchUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: BatchCreateManyDepartmentInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutDepartmentInput | BatchUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutDepartmentInput | BatchUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutDepartmentInput | SubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutDepartmentInput | SubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutDepartmentInput | SubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput> | BatchCreateWithoutDepartmentInput[] | BatchUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutDepartmentInput | BatchCreateOrConnectWithoutDepartmentInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutDepartmentInput | BatchUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: BatchCreateManyDepartmentInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutDepartmentInput | BatchUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutDepartmentInput | BatchUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutDepartmentInput | SubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutDepartmentInput | SubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutDepartmentInput | SubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutBatchesInput = {
    create?: XOR<DepartmentCreateWithoutBatchesInput, DepartmentUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutBatchesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ClassCreateNestedManyWithoutBatchInput = {
    create?: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput> | ClassCreateWithoutBatchInput[] | ClassUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutBatchInput | ClassCreateOrConnectWithoutBatchInput[]
    createMany?: ClassCreateManyBatchInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput> | ClassCreateWithoutBatchInput[] | ClassUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutBatchInput | ClassCreateOrConnectWithoutBatchInput[]
    createMany?: ClassCreateManyBatchInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<DepartmentCreateWithoutBatchesInput, DepartmentUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutBatchesInput
    upsert?: DepartmentUpsertWithoutBatchesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutBatchesInput, DepartmentUpdateWithoutBatchesInput>, DepartmentUncheckedUpdateWithoutBatchesInput>
  }

  export type ClassUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput> | ClassCreateWithoutBatchInput[] | ClassUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutBatchInput | ClassCreateOrConnectWithoutBatchInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutBatchInput | ClassUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ClassCreateManyBatchInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutBatchInput | ClassUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutBatchInput | ClassUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput> | ClassCreateWithoutBatchInput[] | ClassUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutBatchInput | ClassCreateOrConnectWithoutBatchInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutBatchInput | ClassUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: ClassCreateManyBatchInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutBatchInput | ClassUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutBatchInput | ClassUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type BatchCreateNestedOneWithoutClassesInput = {
    create?: XOR<BatchCreateWithoutClassesInput, BatchUncheckedCreateWithoutClassesInput>
    connectOrCreate?: BatchCreateOrConnectWithoutClassesInput
    connect?: BatchWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutClassInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput> | UserCreateWithoutClassInput[] | UserUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClassInput | UserCreateOrConnectWithoutClassInput[]
    createMany?: UserCreateManyClassInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeachingAssignmentCreateNestedManyWithoutClassInput = {
    create?: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput> | TeachingAssignmentCreateWithoutClassInput[] | TeachingAssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutClassInput | TeachingAssignmentCreateOrConnectWithoutClassInput[]
    createMany?: TeachingAssignmentCreateManyClassInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutClassInput = {
    create?: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput> | GroupCreateWithoutClassInput[] | GroupUncheckedCreateWithoutClassInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutClassInput | GroupCreateOrConnectWithoutClassInput[]
    createMany?: GroupCreateManyClassInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput> | UserCreateWithoutClassInput[] | UserUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClassInput | UserCreateOrConnectWithoutClassInput[]
    createMany?: UserCreateManyClassInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput> | TeachingAssignmentCreateWithoutClassInput[] | TeachingAssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutClassInput | TeachingAssignmentCreateOrConnectWithoutClassInput[]
    createMany?: TeachingAssignmentCreateManyClassInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput> | GroupCreateWithoutClassInput[] | GroupUncheckedCreateWithoutClassInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutClassInput | GroupCreateOrConnectWithoutClassInput[]
    createMany?: GroupCreateManyClassInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type BatchUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<BatchCreateWithoutClassesInput, BatchUncheckedCreateWithoutClassesInput>
    connectOrCreate?: BatchCreateOrConnectWithoutClassesInput
    upsert?: BatchUpsertWithoutClassesInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutClassesInput, BatchUpdateWithoutClassesInput>, BatchUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateManyWithoutClassNestedInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput> | UserCreateWithoutClassInput[] | UserUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClassInput | UserCreateOrConnectWithoutClassInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClassInput | UserUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UserCreateManyClassInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClassInput | UserUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClassInput | UserUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeachingAssignmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput> | TeachingAssignmentCreateWithoutClassInput[] | TeachingAssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutClassInput | TeachingAssignmentCreateOrConnectWithoutClassInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutClassInput | TeachingAssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeachingAssignmentCreateManyClassInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutClassInput | TeachingAssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutClassInput | TeachingAssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutClassNestedInput = {
    create?: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput> | GroupCreateWithoutClassInput[] | GroupUncheckedCreateWithoutClassInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutClassInput | GroupCreateOrConnectWithoutClassInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutClassInput | GroupUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: GroupCreateManyClassInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutClassInput | GroupUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutClassInput | GroupUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput> | UserCreateWithoutClassInput[] | UserUncheckedCreateWithoutClassInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClassInput | UserCreateOrConnectWithoutClassInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClassInput | UserUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: UserCreateManyClassInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClassInput | UserUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClassInput | UserUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput> | TeachingAssignmentCreateWithoutClassInput[] | TeachingAssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutClassInput | TeachingAssignmentCreateOrConnectWithoutClassInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutClassInput | TeachingAssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeachingAssignmentCreateManyClassInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutClassInput | TeachingAssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutClassInput | TeachingAssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput> | GroupCreateWithoutClassInput[] | GroupUncheckedCreateWithoutClassInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutClassInput | GroupCreateOrConnectWithoutClassInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutClassInput | GroupUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: GroupCreateManyClassInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutClassInput | GroupUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutClassInput | GroupUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubjectsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type TeachingAssignmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type ProjectSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput> | ProjectSubjectCreateWithoutSubjectInput[] | ProjectSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutSubjectInput | ProjectSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: ProjectSubjectCreateManySubjectInputEnvelope
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
  }

  export type TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
  }

  export type ProjectSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput> | ProjectSubjectCreateWithoutSubjectInput[] | ProjectSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutSubjectInput | ProjectSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: ProjectSubjectCreateManySubjectInputEnvelope
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubjectsInput
    upsert?: DepartmentUpsertWithoutSubjectsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSubjectsInput, DepartmentUpdateWithoutSubjectsInput>, DepartmentUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeachingAssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type ProjectSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput> | ProjectSubjectCreateWithoutSubjectInput[] | ProjectSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutSubjectInput | ProjectSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: ProjectSubjectUpsertWithWhereUniqueWithoutSubjectInput | ProjectSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ProjectSubjectCreateManySubjectInputEnvelope
    set?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    disconnect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    delete?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    update?: ProjectSubjectUpdateWithWhereUniqueWithoutSubjectInput | ProjectSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ProjectSubjectUpdateManyWithWhereWithoutSubjectInput | ProjectSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput> | TeachingAssignmentCreateWithoutSubjectInput[] | TeachingAssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeachingAssignmentCreateOrConnectWithoutSubjectInput | TeachingAssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeachingAssignmentCreateManySubjectInputEnvelope
    set?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    disconnect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    delete?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    connect?: TeachingAssignmentWhereUniqueInput | TeachingAssignmentWhereUniqueInput[]
    update?: TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput | TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput | TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
  }

  export type ProjectSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput> | ProjectSubjectCreateWithoutSubjectInput[] | ProjectSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutSubjectInput | ProjectSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: ProjectSubjectUpsertWithWhereUniqueWithoutSubjectInput | ProjectSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ProjectSubjectCreateManySubjectInputEnvelope
    set?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    disconnect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    delete?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    update?: ProjectSubjectUpdateWithWhereUniqueWithoutSubjectInput | ProjectSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ProjectSubjectUpdateManyWithWhereWithoutSubjectInput | ProjectSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<UserCreateWithoutTeachingAssignmentsInput, UserUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutTeachingAssignmentsInput = {
    create?: XOR<ClassCreateWithoutTeachingAssignmentsInput, ClassUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachingAssignmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutTeachingAssignmentsInput, UserUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: UserUpsertWithoutTeachingAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeachingAssignmentsInput, UserUpdateWithoutTeachingAssignmentsInput>, UserUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: SubjectUpsertWithoutTeachingAssignmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput, SubjectUpdateWithoutTeachingAssignmentsInput>, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type ClassUpdateOneRequiredWithoutTeachingAssignmentsNestedInput = {
    create?: XOR<ClassCreateWithoutTeachingAssignmentsInput, ClassUncheckedCreateWithoutTeachingAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachingAssignmentsInput
    upsert?: ClassUpsertWithoutTeachingAssignmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeachingAssignmentsInput, ClassUpdateWithoutTeachingAssignmentsInput>, ClassUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type ClassCreateNestedOneWithoutGroupsInput = {
    create?: XOR<ClassCreateWithoutGroupsInput, ClassUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutGroupsInput
    connect?: ClassWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutGroupInput = {
    create?: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput> | ProjectCreateWithoutGroupInput[] | ProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutGroupInput | ProjectCreateOrConnectWithoutGroupInput[]
    createMany?: ProjectCreateManyGroupInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput> | ProjectCreateWithoutGroupInput[] | ProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutGroupInput | ProjectCreateOrConnectWithoutGroupInput[]
    createMany?: ProjectCreateManyGroupInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<ClassCreateWithoutGroupsInput, ClassUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutGroupsInput
    upsert?: ClassUpsertWithoutGroupsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutGroupsInput, ClassUpdateWithoutGroupsInput>, ClassUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput> | ProjectCreateWithoutGroupInput[] | ProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutGroupInput | ProjectCreateOrConnectWithoutGroupInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutGroupInput | ProjectUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ProjectCreateManyGroupInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutGroupInput | ProjectUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutGroupInput | ProjectUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput> | ProjectCreateWithoutGroupInput[] | ProjectUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutGroupInput | ProjectCreateOrConnectWithoutGroupInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutGroupInput | ProjectUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ProjectCreateManyGroupInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutGroupInput | ProjectUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutGroupInput | ProjectUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupsInput, UserUpdateWithoutGroupsInput>, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupCreateNestedOneWithoutProjectsInput = {
    create?: XOR<GroupCreateWithoutProjectsInput, GroupUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutProjectsInput
    connect?: GroupWhereUniqueInput
  }

  export type ProjectSubjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput> | ProjectSubjectCreateWithoutProjectInput[] | ProjectSubjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutProjectInput | ProjectSubjectCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSubjectCreateManyProjectInputEnvelope
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutProjectInput = {
    create?: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput> | SubmissionCreateWithoutProjectInput[] | SubmissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProjectInput | SubmissionCreateOrConnectWithoutProjectInput[]
    createMany?: SubmissionCreateManyProjectInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProjectSubjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput> | ProjectSubjectCreateWithoutProjectInput[] | ProjectSubjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutProjectInput | ProjectSubjectCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectSubjectCreateManyProjectInputEnvelope
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput> | SubmissionCreateWithoutProjectInput[] | SubmissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProjectInput | SubmissionCreateOrConnectWithoutProjectInput[]
    createMany?: SubmissionCreateManyProjectInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NullableEnumTitleStatusFieldUpdateOperationsInput = {
    set?: $Enums.TitleStatus | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GroupUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<GroupCreateWithoutProjectsInput, GroupUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutProjectsInput
    upsert?: GroupUpsertWithoutProjectsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutProjectsInput, GroupUpdateWithoutProjectsInput>, GroupUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectSubjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput> | ProjectSubjectCreateWithoutProjectInput[] | ProjectSubjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutProjectInput | ProjectSubjectCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSubjectUpsertWithWhereUniqueWithoutProjectInput | ProjectSubjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSubjectCreateManyProjectInputEnvelope
    set?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    disconnect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    delete?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    update?: ProjectSubjectUpdateWithWhereUniqueWithoutProjectInput | ProjectSubjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSubjectUpdateManyWithWhereWithoutProjectInput | ProjectSubjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput> | SubmissionCreateWithoutProjectInput[] | SubmissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProjectInput | SubmissionCreateOrConnectWithoutProjectInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProjectInput | SubmissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SubmissionCreateManyProjectInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProjectInput | SubmissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProjectInput | SubmissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProjectSubjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput> | ProjectSubjectCreateWithoutProjectInput[] | ProjectSubjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectSubjectCreateOrConnectWithoutProjectInput | ProjectSubjectCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectSubjectUpsertWithWhereUniqueWithoutProjectInput | ProjectSubjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectSubjectCreateManyProjectInputEnvelope
    set?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    disconnect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    delete?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    connect?: ProjectSubjectWhereUniqueInput | ProjectSubjectWhereUniqueInput[]
    update?: ProjectSubjectUpdateWithWhereUniqueWithoutProjectInput | ProjectSubjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectSubjectUpdateManyWithWhereWithoutProjectInput | ProjectSubjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput> | SubmissionCreateWithoutProjectInput[] | SubmissionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProjectInput | SubmissionCreateOrConnectWithoutProjectInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProjectInput | SubmissionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SubmissionCreateManyProjectInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProjectInput | SubmissionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProjectInput | SubmissionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<ProjectCreateWithoutSubjectsInput, ProjectUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubjectsInput
    connect?: ProjectWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutProjectSubjectsInput = {
    create?: XOR<SubjectCreateWithoutProjectSubjectsInput, SubjectUncheckedCreateWithoutProjectSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutProjectSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<ProjectCreateWithoutSubjectsInput, ProjectUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubjectsInput
    upsert?: ProjectUpsertWithoutSubjectsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSubjectsInput, ProjectUpdateWithoutSubjectsInput>, ProjectUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutProjectSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutProjectSubjectsInput, SubjectUncheckedCreateWithoutProjectSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutProjectSubjectsInput
    upsert?: SubjectUpsertWithoutProjectSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutProjectSubjectsInput, SubjectUpdateWithoutProjectSubjectsInput>, SubjectUncheckedUpdateWithoutProjectSubjectsInput>
  }

  export type RubricCreateNestedManyWithoutReviewInput = {
    create?: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput> | RubricCreateWithoutReviewInput[] | RubricUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RubricCreateOrConnectWithoutReviewInput | RubricCreateOrConnectWithoutReviewInput[]
    createMany?: RubricCreateManyReviewInputEnvelope
    connect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutReviewInput = {
    create?: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput> | SubmissionCreateWithoutReviewInput[] | SubmissionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutReviewInput | SubmissionCreateOrConnectWithoutReviewInput[]
    createMany?: SubmissionCreateManyReviewInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type RubricUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput> | RubricCreateWithoutReviewInput[] | RubricUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RubricCreateOrConnectWithoutReviewInput | RubricCreateOrConnectWithoutReviewInput[]
    createMany?: RubricCreateManyReviewInputEnvelope
    connect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput> | SubmissionCreateWithoutReviewInput[] | SubmissionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutReviewInput | SubmissionCreateOrConnectWithoutReviewInput[]
    createMany?: SubmissionCreateManyReviewInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RubricUpdateManyWithoutReviewNestedInput = {
    create?: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput> | RubricCreateWithoutReviewInput[] | RubricUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RubricCreateOrConnectWithoutReviewInput | RubricCreateOrConnectWithoutReviewInput[]
    upsert?: RubricUpsertWithWhereUniqueWithoutReviewInput | RubricUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: RubricCreateManyReviewInputEnvelope
    set?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    disconnect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    delete?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    connect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    update?: RubricUpdateWithWhereUniqueWithoutReviewInput | RubricUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: RubricUpdateManyWithWhereWithoutReviewInput | RubricUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: RubricScalarWhereInput | RubricScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput> | SubmissionCreateWithoutReviewInput[] | SubmissionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutReviewInput | SubmissionCreateOrConnectWithoutReviewInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutReviewInput | SubmissionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SubmissionCreateManyReviewInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutReviewInput | SubmissionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutReviewInput | SubmissionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type RubricUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput> | RubricCreateWithoutReviewInput[] | RubricUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RubricCreateOrConnectWithoutReviewInput | RubricCreateOrConnectWithoutReviewInput[]
    upsert?: RubricUpsertWithWhereUniqueWithoutReviewInput | RubricUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: RubricCreateManyReviewInputEnvelope
    set?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    disconnect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    delete?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    connect?: RubricWhereUniqueInput | RubricWhereUniqueInput[]
    update?: RubricUpdateWithWhereUniqueWithoutReviewInput | RubricUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: RubricUpdateManyWithWhereWithoutReviewInput | RubricUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: RubricScalarWhereInput | RubricScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput> | SubmissionCreateWithoutReviewInput[] | SubmissionUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutReviewInput | SubmissionCreateOrConnectWithoutReviewInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutReviewInput | SubmissionUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: SubmissionCreateManyReviewInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutReviewInput | SubmissionUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutReviewInput | SubmissionUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutRubricsInput = {
    create?: XOR<ReviewCreateWithoutRubricsInput, ReviewUncheckedCreateWithoutRubricsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRubricsInput
    connect?: ReviewWhereUniqueInput
  }

  export type EvaluationScoreCreateNestedManyWithoutRubricInput = {
    create?: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput> | EvaluationScoreCreateWithoutRubricInput[] | EvaluationScoreUncheckedCreateWithoutRubricInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutRubricInput | EvaluationScoreCreateOrConnectWithoutRubricInput[]
    createMany?: EvaluationScoreCreateManyRubricInputEnvelope
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
  }

  export type EvaluationScoreUncheckedCreateNestedManyWithoutRubricInput = {
    create?: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput> | EvaluationScoreCreateWithoutRubricInput[] | EvaluationScoreUncheckedCreateWithoutRubricInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutRubricInput | EvaluationScoreCreateOrConnectWithoutRubricInput[]
    createMany?: EvaluationScoreCreateManyRubricInputEnvelope
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
  }

  export type ReviewUpdateOneRequiredWithoutRubricsNestedInput = {
    create?: XOR<ReviewCreateWithoutRubricsInput, ReviewUncheckedCreateWithoutRubricsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRubricsInput
    upsert?: ReviewUpsertWithoutRubricsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRubricsInput, ReviewUpdateWithoutRubricsInput>, ReviewUncheckedUpdateWithoutRubricsInput>
  }

  export type EvaluationScoreUpdateManyWithoutRubricNestedInput = {
    create?: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput> | EvaluationScoreCreateWithoutRubricInput[] | EvaluationScoreUncheckedCreateWithoutRubricInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutRubricInput | EvaluationScoreCreateOrConnectWithoutRubricInput[]
    upsert?: EvaluationScoreUpsertWithWhereUniqueWithoutRubricInput | EvaluationScoreUpsertWithWhereUniqueWithoutRubricInput[]
    createMany?: EvaluationScoreCreateManyRubricInputEnvelope
    set?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    disconnect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    delete?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    update?: EvaluationScoreUpdateWithWhereUniqueWithoutRubricInput | EvaluationScoreUpdateWithWhereUniqueWithoutRubricInput[]
    updateMany?: EvaluationScoreUpdateManyWithWhereWithoutRubricInput | EvaluationScoreUpdateManyWithWhereWithoutRubricInput[]
    deleteMany?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
  }

  export type EvaluationScoreUncheckedUpdateManyWithoutRubricNestedInput = {
    create?: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput> | EvaluationScoreCreateWithoutRubricInput[] | EvaluationScoreUncheckedCreateWithoutRubricInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutRubricInput | EvaluationScoreCreateOrConnectWithoutRubricInput[]
    upsert?: EvaluationScoreUpsertWithWhereUniqueWithoutRubricInput | EvaluationScoreUpsertWithWhereUniqueWithoutRubricInput[]
    createMany?: EvaluationScoreCreateManyRubricInputEnvelope
    set?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    disconnect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    delete?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    update?: EvaluationScoreUpdateWithWhereUniqueWithoutRubricInput | EvaluationScoreUpdateWithWhereUniqueWithoutRubricInput[]
    updateMany?: EvaluationScoreUpdateManyWithWhereWithoutRubricInput | EvaluationScoreUpdateManyWithWhereWithoutRubricInput[]
    deleteMany?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ProjectCreateWithoutSubmissionsInput, ProjectUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubmissionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ReviewCreateWithoutSubmissionsInput, ReviewUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSubmissionsInput
    connect?: ReviewWhereUniqueInput
  }

  export type EvaluationCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput> | EvaluationCreateWithoutSubmissionInput[] | EvaluationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubmissionInput | EvaluationCreateOrConnectWithoutSubmissionInput[]
    createMany?: EvaluationCreateManySubmissionInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput> | EvaluationCreateWithoutSubmissionInput[] | EvaluationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubmissionInput | EvaluationCreateOrConnectWithoutSubmissionInput[]
    createMany?: EvaluationCreateManySubmissionInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSubmissionsInput, ProjectUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSubmissionsInput
    upsert?: ProjectUpsertWithoutSubmissionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSubmissionsInput, ProjectUpdateWithoutSubmissionsInput>, ProjectUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ReviewUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ReviewCreateWithoutSubmissionsInput, ReviewUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSubmissionsInput
    upsert?: ReviewUpsertWithoutSubmissionsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSubmissionsInput, ReviewUpdateWithoutSubmissionsInput>, ReviewUncheckedUpdateWithoutSubmissionsInput>
  }

  export type EvaluationUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput> | EvaluationCreateWithoutSubmissionInput[] | EvaluationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubmissionInput | EvaluationCreateOrConnectWithoutSubmissionInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutSubmissionInput | EvaluationUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: EvaluationCreateManySubmissionInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutSubmissionInput | EvaluationUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutSubmissionInput | EvaluationUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput> | EvaluationCreateWithoutSubmissionInput[] | EvaluationUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubmissionInput | EvaluationCreateOrConnectWithoutSubmissionInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutSubmissionInput | EvaluationUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: EvaluationCreateManySubmissionInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutSubmissionInput | EvaluationUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutSubmissionInput | EvaluationUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<SubmissionCreateWithoutEvaluationsInput, SubmissionUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutEvaluationsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type EvaluationScoreCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput> | EvaluationScoreCreateWithoutEvaluationInput[] | EvaluationScoreUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutEvaluationInput | EvaluationScoreCreateOrConnectWithoutEvaluationInput[]
    createMany?: EvaluationScoreCreateManyEvaluationInputEnvelope
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
  }

  export type EvaluationScoreUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput> | EvaluationScoreCreateWithoutEvaluationInput[] | EvaluationScoreUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutEvaluationInput | EvaluationScoreCreateOrConnectWithoutEvaluationInput[]
    createMany?: EvaluationScoreCreateManyEvaluationInputEnvelope
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
  }

  export type SubmissionUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<SubmissionCreateWithoutEvaluationsInput, SubmissionUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutEvaluationsInput
    upsert?: SubmissionUpsertWithoutEvaluationsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutEvaluationsInput, SubmissionUpdateWithoutEvaluationsInput>, SubmissionUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    upsert?: UserUpsertWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluationsInput, UserUpdateWithoutEvaluationsInput>, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type EvaluationScoreUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput> | EvaluationScoreCreateWithoutEvaluationInput[] | EvaluationScoreUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutEvaluationInput | EvaluationScoreCreateOrConnectWithoutEvaluationInput[]
    upsert?: EvaluationScoreUpsertWithWhereUniqueWithoutEvaluationInput | EvaluationScoreUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: EvaluationScoreCreateManyEvaluationInputEnvelope
    set?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    disconnect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    delete?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    update?: EvaluationScoreUpdateWithWhereUniqueWithoutEvaluationInput | EvaluationScoreUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: EvaluationScoreUpdateManyWithWhereWithoutEvaluationInput | EvaluationScoreUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
  }

  export type EvaluationScoreUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput> | EvaluationScoreCreateWithoutEvaluationInput[] | EvaluationScoreUncheckedCreateWithoutEvaluationInput[]
    connectOrCreate?: EvaluationScoreCreateOrConnectWithoutEvaluationInput | EvaluationScoreCreateOrConnectWithoutEvaluationInput[]
    upsert?: EvaluationScoreUpsertWithWhereUniqueWithoutEvaluationInput | EvaluationScoreUpsertWithWhereUniqueWithoutEvaluationInput[]
    createMany?: EvaluationScoreCreateManyEvaluationInputEnvelope
    set?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    disconnect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    delete?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    connect?: EvaluationScoreWhereUniqueInput | EvaluationScoreWhereUniqueInput[]
    update?: EvaluationScoreUpdateWithWhereUniqueWithoutEvaluationInput | EvaluationScoreUpdateWithWhereUniqueWithoutEvaluationInput[]
    updateMany?: EvaluationScoreUpdateManyWithWhereWithoutEvaluationInput | EvaluationScoreUpdateManyWithWhereWithoutEvaluationInput[]
    deleteMany?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
  }

  export type EvaluationCreateNestedOneWithoutScoresInput = {
    create?: XOR<EvaluationCreateWithoutScoresInput, EvaluationUncheckedCreateWithoutScoresInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutScoresInput
    connect?: EvaluationWhereUniqueInput
  }

  export type RubricCreateNestedOneWithoutEvaluationScoresInput = {
    create?: XOR<RubricCreateWithoutEvaluationScoresInput, RubricUncheckedCreateWithoutEvaluationScoresInput>
    connectOrCreate?: RubricCreateOrConnectWithoutEvaluationScoresInput
    connect?: RubricWhereUniqueInput
  }

  export type EvaluationUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<EvaluationCreateWithoutScoresInput, EvaluationUncheckedCreateWithoutScoresInput>
    connectOrCreate?: EvaluationCreateOrConnectWithoutScoresInput
    upsert?: EvaluationUpsertWithoutScoresInput
    connect?: EvaluationWhereUniqueInput
    update?: XOR<XOR<EvaluationUpdateToOneWithWhereWithoutScoresInput, EvaluationUpdateWithoutScoresInput>, EvaluationUncheckedUpdateWithoutScoresInput>
  }

  export type RubricUpdateOneRequiredWithoutEvaluationScoresNestedInput = {
    create?: XOR<RubricCreateWithoutEvaluationScoresInput, RubricUncheckedCreateWithoutEvaluationScoresInput>
    connectOrCreate?: RubricCreateOrConnectWithoutEvaluationScoresInput
    upsert?: RubricUpsertWithoutEvaluationScoresInput
    connect?: RubricWhereUniqueInput
    update?: XOR<XOR<RubricUpdateToOneWithWhereWithoutEvaluationScoresInput, RubricUpdateWithoutEvaluationScoresInput>, RubricUncheckedUpdateWithoutEvaluationScoresInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTitleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TitleStatus | EnumTitleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTitleStatusNullableFilter<$PrismaModel> | $Enums.TitleStatus | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTitleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TitleStatus | EnumTitleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TitleStatus[] | ListEnumTitleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTitleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TitleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTitleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTitleStatusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    section: string
    batch: BatchCreateNestedOneWithoutClassesInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutClassInput
    groups?: GroupCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    batchId: string
    section: string
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutClassInput
    groups?: GroupUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type TeachingAssignmentCreateWithoutStaffInput = {
    id?: string
    subject: SubjectCreateNestedOneWithoutTeachingAssignmentsInput
    class: ClassCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutStaffInput = {
    id?: string
    subjectId: string
    classId: string
  }

  export type TeachingAssignmentCreateOrConnectWithoutStaffInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput>
  }

  export type TeachingAssignmentCreateManyStaffInputEnvelope = {
    data: TeachingAssignmentCreateManyStaffInput | TeachingAssignmentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    groupId: string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutStaffInput = {
    id?: string
    comment?: string | null
    submission: SubmissionCreateNestedOneWithoutEvaluationsInput
    scores?: EvaluationScoreCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutStaffInput = {
    id?: string
    submissionId: string
    comment?: string | null
    scores?: EvaluationScoreUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutStaffInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput>
  }

  export type EvaluationCreateManyStaffInputEnvelope = {
    data: EvaluationCreateManyStaffInput | EvaluationCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    batch?: BatchUpdateOneRequiredWithoutClassesNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutClassNestedInput
    groups?: GroupUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutClassNestedInput
    groups?: GroupUncheckedUpdateManyWithoutClassNestedInput
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutStaffInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutStaffInput, TeachingAssignmentUncheckedUpdateWithoutStaffInput>
    create: XOR<TeachingAssignmentCreateWithoutStaffInput, TeachingAssignmentUncheckedCreateWithoutStaffInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutStaffInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutStaffInput, TeachingAssignmentUncheckedUpdateWithoutStaffInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutStaffInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutStaffInput>
  }

  export type TeachingAssignmentScalarWhereInput = {
    AND?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    OR?: TeachingAssignmentScalarWhereInput[]
    NOT?: TeachingAssignmentScalarWhereInput | TeachingAssignmentScalarWhereInput[]
    id?: StringFilter<"TeachingAssignment"> | string
    staffId?: StringFilter<"TeachingAssignment"> | string
    subjectId?: StringFilter<"TeachingAssignment"> | string
    classId?: StringFilter<"TeachingAssignment"> | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutStaffInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutStaffInput, EvaluationUncheckedUpdateWithoutStaffInput>
    create: XOR<EvaluationCreateWithoutStaffInput, EvaluationUncheckedCreateWithoutStaffInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutStaffInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutStaffInput, EvaluationUncheckedUpdateWithoutStaffInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutStaffInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutStaffInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    submissionId?: StringFilter<"Evaluation"> | string
    staffId?: StringFilter<"Evaluation"> | string
    comment?: StringNullableFilter<"Evaluation"> | string | null
  }

  export type BatchCreateWithoutDepartmentInput = {
    id?: string
    graduationYear: number
    classes?: ClassCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutDepartmentInput = {
    id?: string
    graduationYear: number
    classes?: ClassUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutDepartmentInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput>
  }

  export type BatchCreateManyDepartmentInputEnvelope = {
    data: BatchCreateManyDepartmentInput | BatchCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutDepartmentInput = {
    id?: string
    name: string
    semester: number
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutSubjectInput
    projectSubjects?: ProjectSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    semester: number
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput
    projectSubjects?: ProjectSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type SubjectCreateManyDepartmentInputEnvelope = {
    data: SubjectCreateManyDepartmentInput | SubjectCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type BatchUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutDepartmentInput, BatchUncheckedUpdateWithoutDepartmentInput>
    create: XOR<BatchCreateWithoutDepartmentInput, BatchUncheckedCreateWithoutDepartmentInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutDepartmentInput, BatchUncheckedUpdateWithoutDepartmentInput>
  }

  export type BatchUpdateManyWithWhereWithoutDepartmentInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: StringFilter<"Batch"> | string
    departmentId?: StringFilter<"Batch"> | string
    graduationYear?: IntFilter<"Batch"> | number
  }

  export type SubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutDepartmentInput, SubjectUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutDepartmentInput, SubjectUncheckedUpdateWithoutDepartmentInput>
  }

  export type SubjectUpdateManyWithWhereWithoutDepartmentInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    departmentId?: StringFilter<"Subject"> | string
    semester?: IntFilter<"Subject"> | number
  }

  export type DepartmentCreateWithoutBatchesInput = {
    id?: string
    name: string
    totalSemesters: number
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutBatchesInput = {
    id?: string
    name: string
    totalSemesters: number
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutBatchesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutBatchesInput, DepartmentUncheckedCreateWithoutBatchesInput>
  }

  export type ClassCreateWithoutBatchInput = {
    id?: string
    section: string
    students?: UserCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutClassInput
    groups?: GroupCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutBatchInput = {
    id?: string
    section: string
    students?: UserUncheckedCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutClassInput
    groups?: GroupUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutBatchInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput>
  }

  export type ClassCreateManyBatchInputEnvelope = {
    data: ClassCreateManyBatchInput | ClassCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutBatchesInput = {
    update: XOR<DepartmentUpdateWithoutBatchesInput, DepartmentUncheckedUpdateWithoutBatchesInput>
    create: XOR<DepartmentCreateWithoutBatchesInput, DepartmentUncheckedCreateWithoutBatchesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutBatchesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutBatchesInput, DepartmentUncheckedUpdateWithoutBatchesInput>
  }

  export type DepartmentUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type ClassUpsertWithWhereUniqueWithoutBatchInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutBatchInput, ClassUncheckedUpdateWithoutBatchInput>
    create: XOR<ClassCreateWithoutBatchInput, ClassUncheckedCreateWithoutBatchInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutBatchInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutBatchInput, ClassUncheckedUpdateWithoutBatchInput>
  }

  export type ClassUpdateManyWithWhereWithoutBatchInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutBatchInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    batchId?: StringFilter<"Class"> | string
    section?: StringFilter<"Class"> | string
  }

  export type BatchCreateWithoutClassesInput = {
    id?: string
    graduationYear: number
    department: DepartmentCreateNestedOneWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutClassesInput = {
    id?: string
    departmentId: string
    graduationYear: number
  }

  export type BatchCreateOrConnectWithoutClassesInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutClassesInput, BatchUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutStaffInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutStaffInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutClassInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type UserCreateManyClassInputEnvelope = {
    data: UserCreateManyClassInput | UserCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TeachingAssignmentCreateWithoutClassInput = {
    id?: string
    staff: UserCreateNestedOneWithoutTeachingAssignmentsInput
    subject: SubjectCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutClassInput = {
    id?: string
    staffId: string
    subjectId: string
  }

  export type TeachingAssignmentCreateOrConnectWithoutClassInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput>
  }

  export type TeachingAssignmentCreateManyClassInputEnvelope = {
    data: TeachingAssignmentCreateManyClassInput | TeachingAssignmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutClassInput = {
    id?: string
    name: string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    projects?: ProjectCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    projects?: ProjectUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutClassInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput>
  }

  export type GroupCreateManyClassInputEnvelope = {
    data: GroupCreateManyClassInput | GroupCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type BatchUpsertWithoutClassesInput = {
    update: XOR<BatchUpdateWithoutClassesInput, BatchUncheckedUpdateWithoutClassesInput>
    create: XOR<BatchCreateWithoutClassesInput, BatchUncheckedCreateWithoutClassesInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutClassesInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutClassesInput, BatchUncheckedUpdateWithoutClassesInput>
  }

  export type BatchUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithWhereUniqueWithoutClassInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClassInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
  }

  export type UserUpdateManyWithWhereWithoutClassInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClassInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    rollNumber?: StringNullableFilter<"User"> | string | null
    classId?: StringNullableFilter<"User"> | string | null
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutClassInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutClassInput, TeachingAssignmentUncheckedUpdateWithoutClassInput>
    create: XOR<TeachingAssignmentCreateWithoutClassInput, TeachingAssignmentUncheckedCreateWithoutClassInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutClassInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutClassInput, TeachingAssignmentUncheckedUpdateWithoutClassInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutClassInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutClassInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutClassInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutClassInput, GroupUncheckedUpdateWithoutClassInput>
    create: XOR<GroupCreateWithoutClassInput, GroupUncheckedCreateWithoutClassInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutClassInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutClassInput, GroupUncheckedUpdateWithoutClassInput>
  }

  export type GroupUpdateManyWithWhereWithoutClassInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutClassInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    classId?: StringFilter<"Group"> | string
  }

  export type DepartmentCreateWithoutSubjectsInput = {
    id?: string
    name: string
    totalSemesters: number
    batches?: BatchCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSubjectsInput = {
    id?: string
    name: string
    totalSemesters: number
    batches?: BatchUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSubjectsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
  }

  export type TeachingAssignmentCreateWithoutSubjectInput = {
    id?: string
    staff: UserCreateNestedOneWithoutTeachingAssignmentsInput
    class: ClassCreateNestedOneWithoutTeachingAssignmentsInput
  }

  export type TeachingAssignmentUncheckedCreateWithoutSubjectInput = {
    id?: string
    staffId: string
    classId: string
  }

  export type TeachingAssignmentCreateOrConnectWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    create: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type TeachingAssignmentCreateManySubjectInputEnvelope = {
    data: TeachingAssignmentCreateManySubjectInput | TeachingAssignmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectSubjectCreateWithoutSubjectInput = {
    project: ProjectCreateNestedOneWithoutSubjectsInput
  }

  export type ProjectSubjectUncheckedCreateWithoutSubjectInput = {
    projectId: string
  }

  export type ProjectSubjectCreateOrConnectWithoutSubjectInput = {
    where: ProjectSubjectWhereUniqueInput
    create: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type ProjectSubjectCreateManySubjectInputEnvelope = {
    data: ProjectSubjectCreateManySubjectInput | ProjectSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutSubjectsInput = {
    update: XOR<DepartmentUpdateWithoutSubjectsInput, DepartmentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSubjectsInput, DepartmentUncheckedUpdateWithoutSubjectsInput>
  }

  export type DepartmentUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    batches?: BatchUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalSemesters?: IntFieldUpdateOperationsInput | number
    batches?: BatchUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type TeachingAssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    update: XOR<TeachingAssignmentUpdateWithoutSubjectInput, TeachingAssignmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeachingAssignmentCreateWithoutSubjectInput, TeachingAssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type TeachingAssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeachingAssignmentWhereUniqueInput
    data: XOR<TeachingAssignmentUpdateWithoutSubjectInput, TeachingAssignmentUncheckedUpdateWithoutSubjectInput>
  }

  export type TeachingAssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: TeachingAssignmentScalarWhereInput
    data: XOR<TeachingAssignmentUpdateManyMutationInput, TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ProjectSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ProjectSubjectWhereUniqueInput
    update: XOR<ProjectSubjectUpdateWithoutSubjectInput, ProjectSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<ProjectSubjectCreateWithoutSubjectInput, ProjectSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type ProjectSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ProjectSubjectWhereUniqueInput
    data: XOR<ProjectSubjectUpdateWithoutSubjectInput, ProjectSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type ProjectSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: ProjectSubjectScalarWhereInput
    data: XOR<ProjectSubjectUpdateManyMutationInput, ProjectSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type ProjectSubjectScalarWhereInput = {
    AND?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
    OR?: ProjectSubjectScalarWhereInput[]
    NOT?: ProjectSubjectScalarWhereInput | ProjectSubjectScalarWhereInput[]
    projectId?: StringFilter<"ProjectSubject"> | string
    subjectId?: StringFilter<"ProjectSubject"> | string
  }

  export type UserCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    class?: ClassCreateNestedOneWithoutStudentsInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    classId?: string | null
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeachingAssignmentsInput, UserUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type SubjectCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    semester: number
    department: DepartmentCreateNestedOneWithoutSubjectsInput
    projectSubjects?: ProjectSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    name: string
    departmentId: string
    semester: number
    projectSubjects?: ProjectSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type ClassCreateWithoutTeachingAssignmentsInput = {
    id?: string
    section: string
    batch: BatchCreateNestedOneWithoutClassesInput
    students?: UserCreateNestedManyWithoutClassInput
    groups?: GroupCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeachingAssignmentsInput = {
    id?: string
    batchId: string
    section: string
    students?: UserUncheckedCreateNestedManyWithoutClassInput
    groups?: GroupUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeachingAssignmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeachingAssignmentsInput, ClassUncheckedCreateWithoutTeachingAssignmentsInput>
  }

  export type UserUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<UserUpdateWithoutTeachingAssignmentsInput, UserUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<UserCreateWithoutTeachingAssignmentsInput, UserUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeachingAssignmentsInput, UserUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type UserUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneWithoutStudentsNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type SubjectUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<SubjectUpdateWithoutTeachingAssignmentsInput, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<SubjectCreateWithoutTeachingAssignmentsInput, SubjectUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachingAssignmentsInput, SubjectUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type SubjectUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutSubjectsNestedInput
    projectSubjects?: ProjectSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    projectSubjects?: ProjectSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type ClassUpsertWithoutTeachingAssignmentsInput = {
    update: XOR<ClassUpdateWithoutTeachingAssignmentsInput, ClassUncheckedUpdateWithoutTeachingAssignmentsInput>
    create: XOR<ClassCreateWithoutTeachingAssignmentsInput, ClassUncheckedCreateWithoutTeachingAssignmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeachingAssignmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeachingAssignmentsInput, ClassUncheckedUpdateWithoutTeachingAssignmentsInput>
  }

  export type ClassUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    batch?: BatchUpdateOneRequiredWithoutClassesNestedInput
    students?: UserUpdateManyWithoutClassNestedInput
    groups?: GroupUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeachingAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutClassNestedInput
    groups?: GroupUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateWithoutGroupsInput = {
    id?: string
    section: string
    batch: BatchCreateNestedOneWithoutClassesInput
    students?: UserCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutGroupsInput = {
    id?: string
    batchId: string
    section: string
    students?: UserUncheckedCreateNestedManyWithoutClassInput
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutGroupsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutGroupsInput, ClassUncheckedCreateWithoutGroupsInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    userId: string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutGroupInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    subjects?: ProjectSubjectCreateNestedManyWithoutProjectInput
    submissions?: SubmissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutGroupInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    subjects?: ProjectSubjectUncheckedCreateNestedManyWithoutProjectInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutGroupInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput>
  }

  export type ProjectCreateManyGroupInputEnvelope = {
    data: ProjectCreateManyGroupInput | ProjectCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutGroupsInput = {
    update: XOR<ClassUpdateWithoutGroupsInput, ClassUncheckedUpdateWithoutGroupsInput>
    create: XOR<ClassCreateWithoutGroupsInput, ClassUncheckedCreateWithoutGroupsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutGroupsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutGroupsInput, ClassUncheckedUpdateWithoutGroupsInput>
  }

  export type ClassUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    batch?: BatchUpdateOneRequiredWithoutClassesNestedInput
    students?: UserUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutGroupInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutGroupInput, ProjectUncheckedUpdateWithoutGroupInput>
    create: XOR<ProjectCreateWithoutGroupInput, ProjectUncheckedCreateWithoutGroupInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutGroupInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutGroupInput, ProjectUncheckedUpdateWithoutGroupInput>
  }

  export type ProjectUpdateManyWithWhereWithoutGroupInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutGroupInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    githubRepo?: StringNullableFilter<"Project"> | string | null
    groupId?: StringFilter<"Project"> | string
    proposedTitle?: StringNullableFilter<"Project"> | string | null
    titleStatus?: EnumTitleStatusNullableFilter<"Project"> | $Enums.TitleStatus | null
    titleProposalDeadline?: DateTimeNullableFilter<"Project"> | Date | string | null
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    class: ClassCreateNestedOneWithoutGroupsInput
    projects?: ProjectCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    classId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    class?: ClassCreateNestedOneWithoutStudentsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutStaffInput
    evaluations?: EvaluationCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    classId?: string | null
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutStaffInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutGroupsNestedInput
    projects?: ProjectUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneWithoutStudentsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutStaffNestedInput
    evaluations?: EvaluationUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutStaffNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type GroupCreateWithoutProjectsInput = {
    id?: string
    name: string
    class: ClassCreateNestedOneWithoutGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    classId: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutProjectsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutProjectsInput, GroupUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectSubjectCreateWithoutProjectInput = {
    subject: SubjectCreateNestedOneWithoutProjectSubjectsInput
  }

  export type ProjectSubjectUncheckedCreateWithoutProjectInput = {
    subjectId: string
  }

  export type ProjectSubjectCreateOrConnectWithoutProjectInput = {
    where: ProjectSubjectWhereUniqueInput
    create: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSubjectCreateManyProjectInputEnvelope = {
    data: ProjectSubjectCreateManyProjectInput | ProjectSubjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutProjectInput = {
    id?: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    review: ReviewCreateNestedOneWithoutSubmissionsInput
    evaluations?: EvaluationCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProjectInput = {
    id?: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProjectInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput>
  }

  export type SubmissionCreateManyProjectInputEnvelope = {
    data: SubmissionCreateManyProjectInput | SubmissionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutProjectsInput = {
    update: XOR<GroupUpdateWithoutProjectsInput, GroupUncheckedUpdateWithoutProjectsInput>
    create: XOR<GroupCreateWithoutProjectsInput, GroupUncheckedCreateWithoutProjectsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutProjectsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutProjectsInput, GroupUncheckedUpdateWithoutProjectsInput>
  }

  export type GroupUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ProjectSubjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectSubjectWhereUniqueInput
    update: XOR<ProjectSubjectUpdateWithoutProjectInput, ProjectSubjectUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectSubjectCreateWithoutProjectInput, ProjectSubjectUncheckedCreateWithoutProjectInput>
  }

  export type ProjectSubjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectSubjectWhereUniqueInput
    data: XOR<ProjectSubjectUpdateWithoutProjectInput, ProjectSubjectUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectSubjectUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectSubjectScalarWhereInput
    data: XOR<ProjectSubjectUpdateManyMutationInput, ProjectSubjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProjectInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProjectInput, SubmissionUncheckedUpdateWithoutProjectInput>
    create: XOR<SubmissionCreateWithoutProjectInput, SubmissionUncheckedCreateWithoutProjectInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProjectInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProjectInput, SubmissionUncheckedUpdateWithoutProjectInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProjectInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProjectInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    projectId?: StringFilter<"Submission"> | string
    reviewId?: StringFilter<"Submission"> | string
    report?: StringFilter<"Submission"> | string
    fileUrl?: StringFilter<"Submission"> | string
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    llmSummary?: StringNullableFilter<"Submission"> | string | null
  }

  export type ProjectCreateWithoutSubjectsInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    group: GroupCreateNestedOneWithoutProjectsInput
    submissions?: SubmissionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSubjectsInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    groupId: string
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSubjectsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSubjectsInput, ProjectUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutProjectSubjectsInput = {
    id?: string
    name: string
    semester: number
    department: DepartmentCreateNestedOneWithoutSubjectsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutProjectSubjectsInput = {
    id?: string
    name: string
    departmentId: string
    semester: number
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutProjectSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutProjectSubjectsInput, SubjectUncheckedCreateWithoutProjectSubjectsInput>
  }

  export type ProjectUpsertWithoutSubjectsInput = {
    update: XOR<ProjectUpdateWithoutSubjectsInput, ProjectUncheckedUpdateWithoutSubjectsInput>
    create: XOR<ProjectCreateWithoutSubjectsInput, ProjectUncheckedCreateWithoutSubjectsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSubjectsInput, ProjectUncheckedUpdateWithoutSubjectsInput>
  }

  export type ProjectUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutProjectsNestedInput
    submissions?: SubmissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SubjectUpsertWithoutProjectSubjectsInput = {
    update: XOR<SubjectUpdateWithoutProjectSubjectsInput, SubjectUncheckedUpdateWithoutProjectSubjectsInput>
    create: XOR<SubjectCreateWithoutProjectSubjectsInput, SubjectUncheckedCreateWithoutProjectSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutProjectSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutProjectSubjectsInput, SubjectUncheckedUpdateWithoutProjectSubjectsInput>
  }

  export type SubjectUpdateWithoutProjectSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutSubjectsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutProjectSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type RubricCreateWithoutReviewInput = {
    id?: string
    criterion: string
    maxScore: number
    evaluationScores?: EvaluationScoreCreateNestedManyWithoutRubricInput
  }

  export type RubricUncheckedCreateWithoutReviewInput = {
    id?: string
    criterion: string
    maxScore: number
    evaluationScores?: EvaluationScoreUncheckedCreateNestedManyWithoutRubricInput
  }

  export type RubricCreateOrConnectWithoutReviewInput = {
    where: RubricWhereUniqueInput
    create: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput>
  }

  export type RubricCreateManyReviewInputEnvelope = {
    data: RubricCreateManyReviewInput | RubricCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutReviewInput = {
    id?: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    project: ProjectCreateNestedOneWithoutSubmissionsInput
    evaluations?: EvaluationCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutReviewInput = {
    id?: string
    projectId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutReviewInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput>
  }

  export type SubmissionCreateManyReviewInputEnvelope = {
    data: SubmissionCreateManyReviewInput | SubmissionCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type RubricUpsertWithWhereUniqueWithoutReviewInput = {
    where: RubricWhereUniqueInput
    update: XOR<RubricUpdateWithoutReviewInput, RubricUncheckedUpdateWithoutReviewInput>
    create: XOR<RubricCreateWithoutReviewInput, RubricUncheckedCreateWithoutReviewInput>
  }

  export type RubricUpdateWithWhereUniqueWithoutReviewInput = {
    where: RubricWhereUniqueInput
    data: XOR<RubricUpdateWithoutReviewInput, RubricUncheckedUpdateWithoutReviewInput>
  }

  export type RubricUpdateManyWithWhereWithoutReviewInput = {
    where: RubricScalarWhereInput
    data: XOR<RubricUpdateManyMutationInput, RubricUncheckedUpdateManyWithoutReviewInput>
  }

  export type RubricScalarWhereInput = {
    AND?: RubricScalarWhereInput | RubricScalarWhereInput[]
    OR?: RubricScalarWhereInput[]
    NOT?: RubricScalarWhereInput | RubricScalarWhereInput[]
    id?: StringFilter<"Rubric"> | string
    reviewId?: StringFilter<"Rubric"> | string
    criterion?: StringFilter<"Rubric"> | string
    maxScore?: IntFilter<"Rubric"> | number
  }

  export type SubmissionUpsertWithWhereUniqueWithoutReviewInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutReviewInput, SubmissionUncheckedUpdateWithoutReviewInput>
    create: XOR<SubmissionCreateWithoutReviewInput, SubmissionUncheckedCreateWithoutReviewInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutReviewInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutReviewInput, SubmissionUncheckedUpdateWithoutReviewInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutReviewInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewCreateWithoutRubricsInput = {
    id?: string
    name: string
    deadline: Date | string
    submissions?: SubmissionCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutRubricsInput = {
    id?: string
    name: string
    deadline: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRubricsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRubricsInput, ReviewUncheckedCreateWithoutRubricsInput>
  }

  export type EvaluationScoreCreateWithoutRubricInput = {
    id?: string
    score: number
    evaluation: EvaluationCreateNestedOneWithoutScoresInput
  }

  export type EvaluationScoreUncheckedCreateWithoutRubricInput = {
    id?: string
    evaluationId: string
    score: number
  }

  export type EvaluationScoreCreateOrConnectWithoutRubricInput = {
    where: EvaluationScoreWhereUniqueInput
    create: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput>
  }

  export type EvaluationScoreCreateManyRubricInputEnvelope = {
    data: EvaluationScoreCreateManyRubricInput | EvaluationScoreCreateManyRubricInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithoutRubricsInput = {
    update: XOR<ReviewUpdateWithoutRubricsInput, ReviewUncheckedUpdateWithoutRubricsInput>
    create: XOR<ReviewCreateWithoutRubricsInput, ReviewUncheckedCreateWithoutRubricsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRubricsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRubricsInput, ReviewUncheckedUpdateWithoutRubricsInput>
  }

  export type ReviewUpdateWithoutRubricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRubricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type EvaluationScoreUpsertWithWhereUniqueWithoutRubricInput = {
    where: EvaluationScoreWhereUniqueInput
    update: XOR<EvaluationScoreUpdateWithoutRubricInput, EvaluationScoreUncheckedUpdateWithoutRubricInput>
    create: XOR<EvaluationScoreCreateWithoutRubricInput, EvaluationScoreUncheckedCreateWithoutRubricInput>
  }

  export type EvaluationScoreUpdateWithWhereUniqueWithoutRubricInput = {
    where: EvaluationScoreWhereUniqueInput
    data: XOR<EvaluationScoreUpdateWithoutRubricInput, EvaluationScoreUncheckedUpdateWithoutRubricInput>
  }

  export type EvaluationScoreUpdateManyWithWhereWithoutRubricInput = {
    where: EvaluationScoreScalarWhereInput
    data: XOR<EvaluationScoreUpdateManyMutationInput, EvaluationScoreUncheckedUpdateManyWithoutRubricInput>
  }

  export type EvaluationScoreScalarWhereInput = {
    AND?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
    OR?: EvaluationScoreScalarWhereInput[]
    NOT?: EvaluationScoreScalarWhereInput | EvaluationScoreScalarWhereInput[]
    id?: StringFilter<"EvaluationScore"> | string
    evaluationId?: StringFilter<"EvaluationScore"> | string
    rubricId?: StringFilter<"EvaluationScore"> | string
    score?: IntFilter<"EvaluationScore"> | number
  }

  export type ProjectCreateWithoutSubmissionsInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    group: GroupCreateNestedOneWithoutProjectsInput
    subjects?: ProjectSubjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    groupId: string
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
    subjects?: ProjectSubjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSubmissionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSubmissionsInput, ProjectUncheckedCreateWithoutSubmissionsInput>
  }

  export type ReviewCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    deadline: Date | string
    rubrics?: RubricCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    deadline: Date | string
    rubrics?: RubricUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutSubmissionsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSubmissionsInput, ReviewUncheckedCreateWithoutSubmissionsInput>
  }

  export type EvaluationCreateWithoutSubmissionInput = {
    id?: string
    comment?: string | null
    staff: UserCreateNestedOneWithoutEvaluationsInput
    scores?: EvaluationScoreCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutSubmissionInput = {
    id?: string
    staffId: string
    comment?: string | null
    scores?: EvaluationScoreUncheckedCreateNestedManyWithoutEvaluationInput
  }

  export type EvaluationCreateOrConnectWithoutSubmissionInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput>
  }

  export type EvaluationCreateManySubmissionInputEnvelope = {
    data: EvaluationCreateManySubmissionInput | EvaluationCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutSubmissionsInput = {
    update: XOR<ProjectUpdateWithoutSubmissionsInput, ProjectUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ProjectCreateWithoutSubmissionsInput, ProjectUncheckedCreateWithoutSubmissionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSubmissionsInput, ProjectUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProjectUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutProjectsNestedInput
    subjects?: ProjectSubjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: ProjectSubjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ReviewUpsertWithoutSubmissionsInput = {
    update: XOR<ReviewUpdateWithoutSubmissionsInput, ReviewUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ReviewCreateWithoutSubmissionsInput, ReviewUncheckedCreateWithoutSubmissionsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutSubmissionsInput, ReviewUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ReviewUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    rubrics?: RubricUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    rubrics?: RubricUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type EvaluationUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutSubmissionInput, EvaluationUncheckedUpdateWithoutSubmissionInput>
    create: XOR<EvaluationCreateWithoutSubmissionInput, EvaluationUncheckedCreateWithoutSubmissionInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutSubmissionInput, EvaluationUncheckedUpdateWithoutSubmissionInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutSubmissionInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type SubmissionCreateWithoutEvaluationsInput = {
    id?: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
    project: ProjectCreateNestedOneWithoutSubmissionsInput
    review: ReviewCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    projectId: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
  }

  export type SubmissionCreateOrConnectWithoutEvaluationsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutEvaluationsInput, SubmissionUncheckedCreateWithoutEvaluationsInput>
  }

  export type UserCreateWithoutEvaluationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    class?: ClassCreateNestedOneWithoutStudentsInput
    teachingAssignments?: TeachingAssignmentCreateNestedManyWithoutStaffInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
    classId?: string | null
    teachingAssignments?: TeachingAssignmentUncheckedCreateNestedManyWithoutStaffInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
  }

  export type EvaluationScoreCreateWithoutEvaluationInput = {
    id?: string
    score: number
    rubric: RubricCreateNestedOneWithoutEvaluationScoresInput
  }

  export type EvaluationScoreUncheckedCreateWithoutEvaluationInput = {
    id?: string
    rubricId: string
    score: number
  }

  export type EvaluationScoreCreateOrConnectWithoutEvaluationInput = {
    where: EvaluationScoreWhereUniqueInput
    create: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput>
  }

  export type EvaluationScoreCreateManyEvaluationInputEnvelope = {
    data: EvaluationScoreCreateManyEvaluationInput | EvaluationScoreCreateManyEvaluationInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithoutEvaluationsInput = {
    update: XOR<SubmissionUpdateWithoutEvaluationsInput, SubmissionUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<SubmissionCreateWithoutEvaluationsInput, SubmissionUncheckedCreateWithoutEvaluationsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutEvaluationsInput, SubmissionUncheckedUpdateWithoutEvaluationsInput>
  }

  export type SubmissionUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutSubmissionsNestedInput
    review?: ReviewUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutEvaluationsInput = {
    update: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneWithoutStudentsNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EvaluationScoreUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: EvaluationScoreWhereUniqueInput
    update: XOR<EvaluationScoreUpdateWithoutEvaluationInput, EvaluationScoreUncheckedUpdateWithoutEvaluationInput>
    create: XOR<EvaluationScoreCreateWithoutEvaluationInput, EvaluationScoreUncheckedCreateWithoutEvaluationInput>
  }

  export type EvaluationScoreUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: EvaluationScoreWhereUniqueInput
    data: XOR<EvaluationScoreUpdateWithoutEvaluationInput, EvaluationScoreUncheckedUpdateWithoutEvaluationInput>
  }

  export type EvaluationScoreUpdateManyWithWhereWithoutEvaluationInput = {
    where: EvaluationScoreScalarWhereInput
    data: XOR<EvaluationScoreUpdateManyMutationInput, EvaluationScoreUncheckedUpdateManyWithoutEvaluationInput>
  }

  export type EvaluationCreateWithoutScoresInput = {
    id?: string
    comment?: string | null
    submission: SubmissionCreateNestedOneWithoutEvaluationsInput
    staff: UserCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutScoresInput = {
    id?: string
    submissionId: string
    staffId: string
    comment?: string | null
  }

  export type EvaluationCreateOrConnectWithoutScoresInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutScoresInput, EvaluationUncheckedCreateWithoutScoresInput>
  }

  export type RubricCreateWithoutEvaluationScoresInput = {
    id?: string
    criterion: string
    maxScore: number
    review: ReviewCreateNestedOneWithoutRubricsInput
  }

  export type RubricUncheckedCreateWithoutEvaluationScoresInput = {
    id?: string
    reviewId: string
    criterion: string
    maxScore: number
  }

  export type RubricCreateOrConnectWithoutEvaluationScoresInput = {
    where: RubricWhereUniqueInput
    create: XOR<RubricCreateWithoutEvaluationScoresInput, RubricUncheckedCreateWithoutEvaluationScoresInput>
  }

  export type EvaluationUpsertWithoutScoresInput = {
    update: XOR<EvaluationUpdateWithoutScoresInput, EvaluationUncheckedUpdateWithoutScoresInput>
    create: XOR<EvaluationCreateWithoutScoresInput, EvaluationUncheckedCreateWithoutScoresInput>
    where?: EvaluationWhereInput
  }

  export type EvaluationUpdateToOneWithWhereWithoutScoresInput = {
    where?: EvaluationWhereInput
    data: XOR<EvaluationUpdateWithoutScoresInput, EvaluationUncheckedUpdateWithoutScoresInput>
  }

  export type EvaluationUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutEvaluationsNestedInput
    staff?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RubricUpsertWithoutEvaluationScoresInput = {
    update: XOR<RubricUpdateWithoutEvaluationScoresInput, RubricUncheckedUpdateWithoutEvaluationScoresInput>
    create: XOR<RubricCreateWithoutEvaluationScoresInput, RubricUncheckedCreateWithoutEvaluationScoresInput>
    where?: RubricWhereInput
  }

  export type RubricUpdateToOneWithWhereWithoutEvaluationScoresInput = {
    where?: RubricWhereInput
    data: XOR<RubricUpdateWithoutEvaluationScoresInput, RubricUncheckedUpdateWithoutEvaluationScoresInput>
  }

  export type RubricUpdateWithoutEvaluationScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateOneRequiredWithoutRubricsNestedInput
  }

  export type RubricUncheckedUpdateWithoutEvaluationScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
  }

  export type TeachingAssignmentCreateManyStaffInput = {
    id?: string
    subjectId: string
    classId: string
  }

  export type GroupMemberCreateManyUserInput = {
    groupId: string
  }

  export type EvaluationCreateManyStaffInput = {
    id?: string
    submissionId: string
    comment?: string | null
  }

  export type TeachingAssignmentUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type EvaluationUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    submission?: SubmissionUpdateOneRequiredWithoutEvaluationsNestedInput
    scores?: EvaluationScoreUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: EvaluationScoreUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BatchCreateManyDepartmentInput = {
    id?: string
    graduationYear: number
  }

  export type SubjectCreateManyDepartmentInput = {
    id?: string
    name: string
    semester: number
  }

  export type BatchUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    classes?: ClassUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    classes?: ClassUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutSubjectNestedInput
    projectSubjects?: ProjectSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    projectSubjects?: ProjectSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateManyBatchInput = {
    id?: string
    section: string
  }

  export type ClassUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    students?: UserUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutClassNestedInput
    groups?: GroupUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutClassNestedInput
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutClassNestedInput
    groups?: GroupUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyClassInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    rollNumber?: string | null
  }

  export type TeachingAssignmentCreateManyClassInput = {
    id?: string
    staffId: string
    subjectId: string
  }

  export type GroupCreateManyClassInput = {
    id?: string
    name: string
  }

  export type UserUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    teachingAssignments?: TeachingAssignmentUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    teachingAssignments?: TeachingAssignmentUncheckedUpdateManyWithoutStaffNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeachingAssignmentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff?: UserUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    projects?: ProjectUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentCreateManySubjectInput = {
    id?: string
    staffId: string
    classId: string
  }

  export type ProjectSubjectCreateManySubjectInput = {
    projectId: string
  }

  export type TeachingAssignmentUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff?: UserUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachingAssignmentsNestedInput
  }

  export type TeachingAssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingAssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSubjectUpdateWithoutSubjectInput = {
    project?: ProjectUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type ProjectSubjectUncheckedUpdateWithoutSubjectInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSubjectUncheckedUpdateManyWithoutSubjectInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateManyGroupInput = {
    userId: string
  }

  export type ProjectCreateManyGroupInput = {
    id?: string
    title?: string | null
    description?: string | null
    githubRepo?: string | null
    proposedTitle?: string | null
    titleStatus?: $Enums.TitleStatus | null
    titleProposalDeadline?: Date | string | null
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: ProjectSubjectUpdateManyWithoutProjectNestedInput
    submissions?: SubmissionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: ProjectSubjectUncheckedUpdateManyWithoutProjectNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepo?: NullableStringFieldUpdateOperationsInput | string | null
    proposedTitle?: NullableStringFieldUpdateOperationsInput | string | null
    titleStatus?: NullableEnumTitleStatusFieldUpdateOperationsInput | $Enums.TitleStatus | null
    titleProposalDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectSubjectCreateManyProjectInput = {
    subjectId: string
  }

  export type SubmissionCreateManyProjectInput = {
    id?: string
    reviewId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
  }

  export type ProjectSubjectUpdateWithoutProjectInput = {
    subject?: SubjectUpdateOneRequiredWithoutProjectSubjectsNestedInput
  }

  export type ProjectSubjectUncheckedUpdateWithoutProjectInput = {
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectSubjectUncheckedUpdateManyWithoutProjectInput = {
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    review?: ReviewUpdateOneRequiredWithoutSubmissionsNestedInput
    evaluations?: EvaluationUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RubricCreateManyReviewInput = {
    id?: string
    criterion: string
    maxScore: number
  }

  export type SubmissionCreateManyReviewInput = {
    id?: string
    projectId: string
    report: string
    fileUrl: string
    submittedAt: Date | string
    llmSummary?: string | null
  }

  export type RubricUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
    evaluationScores?: EvaluationScoreUpdateManyWithoutRubricNestedInput
  }

  export type RubricUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
    evaluationScores?: EvaluationScoreUncheckedUpdateManyWithoutRubricNestedInput
  }

  export type RubricUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    criterion?: StringFieldUpdateOperationsInput | string
    maxScore?: IntFieldUpdateOperationsInput | number
  }

  export type SubmissionUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutSubmissionsNestedInput
    evaluations?: EvaluationUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
    evaluations?: EvaluationUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    report?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    llmSummary?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationScoreCreateManyRubricInput = {
    id?: string
    evaluationId: string
    score: number
  }

  export type EvaluationScoreUpdateWithoutRubricInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    evaluation?: EvaluationUpdateOneRequiredWithoutScoresNestedInput
  }

  export type EvaluationScoreUncheckedUpdateWithoutRubricInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationScoreUncheckedUpdateManyWithoutRubricInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluationId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationCreateManySubmissionInput = {
    id?: string
    staffId: string
    comment?: string | null
  }

  export type EvaluationUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
    scores?: EvaluationScoreUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    scores?: EvaluationScoreUncheckedUpdateManyWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EvaluationScoreCreateManyEvaluationInput = {
    id?: string
    rubricId: string
    score: number
  }

  export type EvaluationScoreUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rubric?: RubricUpdateOneRequiredWithoutEvaluationScoresNestedInput
  }

  export type EvaluationScoreUncheckedUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rubricId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type EvaluationScoreUncheckedUpdateManyWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rubricId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
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