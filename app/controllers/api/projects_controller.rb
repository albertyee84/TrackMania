class Api::ProjectsController < ApplicationController

    def index
        @projects = Project.where(user_id: params[:user_id])
    end

    def limited
        @projects = Project.where(user_id: params[:user_id]).limit(4)
        render :index
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
        @projects = Project.where("user_id = ? and project_name like ?", params[:user_id], "%" + params[:search] + "%")
        render :index
    end

    def project_params
        params.require(:project).permit(:project_name, :user_id)
    end
end
