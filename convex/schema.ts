import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  beneficiaries: defineTable({
    name: v.string(),
    age: v.number(),
    location: v.string(),
    status: v.string(),
    programId: v.optional(v.id("programs")),
    needs: v.array(v.string()),
    contactNumber: v.string(),
    email: v.optional(v.string()),
    registrationDate: v.string(),
    lastUpdated: v.string(),
  }),

  programs: defineTable({
    name: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    status: v.string(),
    capacity: v.number(),
    enrolled: v.number(),
    type: v.string(),
    coordinator: v.string(),
  }),

  events: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.string(),
    time: v.string(),
    location: v.string(),
    programId: v.optional(v.id("programs")),
    attendees: v.array(v.id("beneficiaries")),
    status: v.string(),
  }),

  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.string(),
    lastLogin: v.string(),
  }),
});