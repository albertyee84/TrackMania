class Api::ProjectsController < ApplicationController

    def index

        @projects = Project.where(user_id: params[:user_id])
        
    end

    def create
        debugger
        @project = Project.new(project_params)
        # @project.user_id = current_user.id
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def project_params
        params.require(:project).permit(:project_name, :user_id)
    end
end