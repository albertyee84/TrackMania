class Api::ProjectsController < ApplicationController

    def index
        @projects = Project.where("user_id = ? and archived = ?", project_params[:user_id], project_params[:archived])
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def update
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
        
    end

    def search
        @projects = Project.where("user_id = ? and project_name like ?", params[:user_id], "%" + params[:search] + "%")
        render :index
    end

    def project_params
        params.require(:project).permit(:project_name, :user_id, :archived)
    end
end
