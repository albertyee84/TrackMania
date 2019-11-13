# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_12_220744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "project_name", null: false
    t.boolean "archived", default: false
    t.boolean "favorite", default: false
    t.index ["archived"], name: "index_projects_on_archived"
    t.index ["favorite"], name: "index_projects_on_favorite"
    t.index ["project_name"], name: "index_projects_on_project_name"
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "stories", force: :cascade do |t|
    t.integer "project_id", null: false
    t.string "name", null: false
    t.string "status", default: "Current", null: false
    t.string "description", null: false
    t.string "labels", null: false
    t.integer "requestor_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_stories_on_project_id"
    t.index ["requestor_id"], name: "index_stories_on_requestor_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
