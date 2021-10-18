class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_note, only: [:create]
  before_action :find_comment, only: [:destroy]

  def create
    @comment = @note.comments.new(comment_params)
    if @comment.save
      @content = comment_params[:content]
    else
      redirect_to '/'
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id)
  end

  def find_note
    @note = Note.find(params[:note_id])
  end

  def find_comment
    @comment = current_user.comments.find(params[:id])
  end
end
