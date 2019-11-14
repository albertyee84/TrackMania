# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Project.delete_all
Story.delete_all

User.create(username: "guest", password: "password")

Project.create(user_id:1,project_name:'Hello World',archived:false,favorite:false)
Project.create(user_id:1,project_name:'MERN Stack',archived:false,favorite:false)
Project.create(user_id:1,project_name:'Sew Sew Sew',archived:false,favorite:false)
Project.create(user_id:1,project_name:'To the point',archived:false,favorite:false)
Project.create(user_id:1,project_name:'Handy Help',archived:false,favorite:false)
Project.create(user_id:1,project_name:'Yesoro',archived:false,favorite:false)
Project.create(user_id:1,project_name:'Thogh',archived:false,favorite:false)
Project.create(user_id:1,project_name:'mixabl',archived:false,favorite:false)
Project.create(user_id:1,project_name:'wundering',archived:false,favorite:false)
Project.create(user_id:1,project_name:'figgi',archived:false,favorite:false)
Project.create(user_id:1,project_name:'unworkabli',archived:false,favorite:false)
Project.create(user_id:1,project_name:'answir',archived:false,favorite:false)
Project.create(user_id:1,project_name:'forgetterz',archived:false,favorite:false)
Project.create(user_id:1,project_name:'agerer',archived:false,favorite:false)
Project.create(user_id:1,project_name:'yesstage',archived:false,favorite:false)

Story.create(project_id:1,name:'Applicable Assortment',description:'Randomness',labels:'Closet Of Choices',requestor_id:1)
Story.create(project_id:2,name:'Assorted Assets',description:'Random Repair',labels:'Et Cetera',requestor_id:1)
Story.create(project_id:3,name:'Clever Counts',description:'Random Report',labels:'Et Cetera Solutions',requestor_id:1)
Story.create(project_id:1,name:'Complete Collection',description:'Random Resource',labels:'Et Cetera Systems',requestor_id:1)
Story.create(project_id:2,name:'Complete Competition',description:'Random Riders',labels:'Etc.',requestor_id:1)
Story.create(project_id:3,name:'Content Construct',description:'Random Row',labels:'Handy Help',requestor_id:1)
Story.create(project_id:1,name:'Count Your Blessings',description:'Random Warehouse',labels:'Here And There And Everywhere',requestor_id:1)
Story.create(project_id:2,name:'Counted Moments',description:'Resource Refresh',labels:'Knick Knacks',requestor_id:1)
Story.create(project_id:3,name:'Creative Content',description:'Sporadic Systems',labels:'Nick’S Knacks',requestor_id:1)
Story.create(project_id:1,name:'Forge Ahead',description:'Sufficient Support',labels:'Odds And Ends',requestor_id:1)
Story.create(project_id:2,name:'Full Force',description:'The Source',labels:'Random Reasoning',requestor_id:1)
Story.create(project_id:3,name:'Make It Count',description:'Trusted Assortment',labels:'Tbd',requestor_id:1)
Story.create(project_id:1,name:'Random Assortment',description:'Wanted Warehouse',labels:'Knick Knack Patty Wack',requestor_id:1)
Story.create(project_id:2,name:'Random Reason',description:'Forge Ahead',labels:'ontribution Collection',requestor_id:1)
Story.create(project_id:3,name:'Random Refresh',description:'Complete Collection',labels:'Race To Random',requestor_id:1)