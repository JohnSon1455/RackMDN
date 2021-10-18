class Users::CollectionsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @collections = current_user.collected_notes.order(updated_at: params[:desc] || :desc).search(params[:search]).page(params[:page])
  end
end
