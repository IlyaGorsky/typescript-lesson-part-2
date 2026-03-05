/**
 * Branded types
 * @see https://spin.atomicobject.com/typescript-flexible-nominal-typing/
 */

interface Flavoring<FlavorT> {
  _type?: FlavorT;
}
export type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

type PersonId = Flavor<number, "Person">;
type BlogPostId = Flavor<number, "BlogPost">;


const personId: PersonId = 123;
const blogPostId: BlogPostId = 456;
const blogPostId2: BlogPostId = personId; // Error: Type 'PersonId' is not assignable to type 'BlogPostId'.
