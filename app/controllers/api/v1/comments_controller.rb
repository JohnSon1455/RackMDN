class Api::V1::CommentsController < ApplicationController
  before_action :authenticate_user!
  def edit_comment
    comment = current_user.comments.find(params[:id])
    comment.update(comment_params)
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end
