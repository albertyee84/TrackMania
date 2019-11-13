class Api::StoriesController < ApplicationController

    before_action :require_login

    def index
        @stories = Story.all
    end

    def create
        @story = Story.new(story_params)
        if @story.save
            render :show
        else
            render json: @story.errors.full_messages, status: 401
        end
    end

    def update
        @story = Story.find(params[:id])
        if @story.update(story_params)
            render :show
        else
            render json: @story.errors.full_messages, status: 401
        end
    end

    def destroy
        @story = Story.find(params[:id])
        @story.destroy
        render :show
    end

    def story_params
        params.require(:story).permit(:project_id, :name, :status, :description, :labels, :requestor_id)
    end
end
