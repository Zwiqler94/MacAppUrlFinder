import type { FromSchema } from "json-schema-to-ts";
import * as schemas from "./schemas";

export type GetIconSetDetailsMetadataParam = FromSchema<
  typeof schemas.GetIconSetDetails.metadata
>;
export type GetIconSetDetailsResponse200 = FromSchema<
  (typeof schemas.GetIconSetDetails.response)["200"]
>;
export type GetIconSetDetailsResponse400 = FromSchema<
  (typeof schemas.GetIconSetDetails.response)["400"]
>;
export type GettingStartedWithYourApi1MetadataParam = FromSchema<
  typeof schemas.GettingStartedWithYourApi1.metadata
>;
export type GettingStartedWithYourApi1Response200 = FromSchema<
  (typeof schemas.GettingStartedWithYourApi1.response)["200"]
>;
export type GettingStartedWithYourApi1Response400 = FromSchema<
  (typeof schemas.GettingStartedWithYourApi1.response)["400"]
>;
export type ListAUsersIconSetsMetadataParam = FromSchema<
  typeof schemas.ListAUsersIconSets.metadata
>;
export type ListAUsersIconSetsResponse200 = FromSchema<
  (typeof schemas.ListAUsersIconSets.response)["200"]
>;
export type ListAUsersIconSetsResponse400 = FromSchema<
  (typeof schemas.ListAUsersIconSets.response)["400"]
>;
export type ListAnAuthorsIconSetsMetadataParam = FromSchema<
  typeof schemas.ListAnAuthorsIconSets.metadata
>;
export type ListAnAuthorsIconSetsResponse200 = FromSchema<
  (typeof schemas.ListAnAuthorsIconSets.response)["200"]
>;
export type ListAnAuthorsIconSetsResponse400 = FromSchema<
  (typeof schemas.ListAnAuthorsIconSets.response)["400"]
>;
export type ListIconSetsInACategoryMetadataParam = FromSchema<
  typeof schemas.ListIconSetsInACategory.metadata
>;
export type ListIconSetsInACategoryResponse200 = FromSchema<
  (typeof schemas.ListIconSetsInACategory.response)["200"]
>;
export type ListIconSetsInACategoryResponse400 = FromSchema<
  (typeof schemas.ListIconSetsInACategory.response)["400"]
>;
export type ListIconSetsOfASpecificStyle1MetadataParam = FromSchema<
  typeof schemas.ListIconSetsOfASpecificStyle1.metadata
>;
export type ListIconSetsOfASpecificStyle1Response200 = FromSchema<
  (typeof schemas.ListIconSetsOfASpecificStyle1.response)["200"]
>;
export type ListIconSetsOfASpecificStyle1Response400 = FromSchema<
  (typeof schemas.ListIconSetsOfASpecificStyle1.response)["400"]
>;
