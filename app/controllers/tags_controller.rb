class TagsController < ApplicationController
  before_action :authenticate_user!

  def destroy
    tag = current_user.tags.find(params[:id])
    tag.destroy
  end
end

private

def tag_params
  params.require(:tag).permit(:title)
end