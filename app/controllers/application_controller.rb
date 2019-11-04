class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?

  def current_user
    @user ||= User.find_by(session_token: session[:session_token])
    @user
  end

  def login(user)
    @user = user
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
    current_user.reset_token
  end

  def logged_in?
    !!current_user
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

end
