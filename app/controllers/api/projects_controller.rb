class Api::ProjectsController < ApplicationController

    def index
        @projects = Project.where(user_id: params[:user_id])
    end

    def create
        @project = Project.new(project_params)
        # @project.user_id = current_user.id
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def search
        @searchedprojects = Project.where("user_id = ? and project_name like ?", params[:user_id], "%" + params[:search] + "%")
        render :search
    end

    def project_params
        params.require(:project).permit(:project_name, :user_id)
    end
end

# Project.where("user_id = 1 and project_name like ?", '%' + 'a' + '%')
#to search for user and project_name containing string