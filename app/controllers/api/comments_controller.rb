class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def index 
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id)
  end

end
