class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_user_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render "/api/users/show"
    else
      render json: ["Invalid Username/Password"], status: 401
    end

  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end

  end

end
