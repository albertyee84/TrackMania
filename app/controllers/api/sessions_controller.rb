class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
 
    @user = User.find_by_creds(username, password)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 401
      # render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['Invalid username or password'], status: 404
    end
  end

end
