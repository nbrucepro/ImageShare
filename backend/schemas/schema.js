// First, we must import the schema creators
import createSchema from "part:@sanity/base/schema-creator";
//visting
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import pin from "./pin";
import user from "./user";
import comment from "./comment";  //amahoroo
import postedBy from "./postedBy";//nom
import save from "./save";

// Then we give our schema to the builder andand provide the result to Sanity
export default createSchema({
  // We name our schema bruce hi
//welcome in 20222//nodeishrere
//ANother-_-day
//ibiniik
//ii am waiting herewego
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([pin, user, postedBy, comment, save]),
});
///bruce in 2022