const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  request_number: {
    type: Number,
    required: true
  },
  role_number: {
    type: Number,
    required: true
  },
  resource_manager: {
    type: String,
    required: true
  },
  ptc_role: {
    type: String,
    required: true
  },
  client_name: {
    type: String,
    required: true
  },
  engagement_name: {
    type: String,
    required: true
  },
  request_name: {
    type: String,
    required: true
  },
  role_name: {
    type: String,
    required: true
  },
  role_created_date: {
    type: Date
  },
  role_start_date: {
    type: Date
  },
  role_end_date: {
    type: Date
  },
  level_desc: {
    type: String,
    required: true
  },
  role_description: {
    type: String
  },
  comment: {
    type: String
  },
  most_likeley_portofolio: {
    type: String,
    required: true
  },
  skill: {
    type: String
  },
  working_days_a_week: {
    type: Number,
    required: true
  },
  days_requested: {
    type: Number
  },

  total_opening_position: {
    type: Number,
    required: true
  },
  role_assignment_type: {
    type: String,
    required: true
  },
  role_location: {
    type: String,
    required: true
  },
  engagement_code: {
    type: String,
    required: true
  },
  engagement_industry: {
    type: String
  },
  engagement_industry_sector: {
    type: String
  },
  business_line: {
    type: String
  },
  industry: {
    type: String
  }
});

module.exports = Role = mongoose.model("role", RoleSchema);
