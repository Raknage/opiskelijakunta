import { z } from "astro/zod";

const personSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string(),
  image: z.string(),
  role: z.string().optional(),
  phone: z.union([z.string(), z.number()]).optional(),
});

export const peopleSchema = z.record(z.string(), personSchema);
export const sectionSchema = z.record(z.string(), peopleSchema);

export type Person = z.infer<typeof personSchema>;
export type People = z.infer<typeof peopleSchema>;
export type Section = z.infer<typeof sectionSchema>;

const partnerSchema = z.object({
  name: z.string(),
  image: z.string(),
  link: z.url().optional(),
});

export const partnersSchema = z.record(z.string(), partnerSchema);
export const associationsSchema = z.record(z.string(), partnersSchema);

export type Partner = z.infer<typeof partnerSchema>;
export type Partners = z.infer<typeof partnersSchema>;
export type Associations = z.infer<typeof associationsSchema>;
