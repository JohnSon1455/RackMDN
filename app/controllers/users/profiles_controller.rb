class Users::ProfilesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_user

  def public_note
    @notes = @user.notes.order(updated_at: params[:desc] || :desc)
                        .where(public_status: true)
                        .search(params[:search])
                        .page(params[:page])  
  end  

  def private_note
    @notes = @user.notes.order(updated_at: params[:desc] || :desc)
                        .search(params[:search])
                        .page(params[:page])  
  end
  
  def like_note
    @notes = @user.favorite_notes.order(updated_at: params[:desc] || :desc)
                                 .search(params[:search])
                                 .page(params[:page])
  end

  private
  def find_user
    @user = User.find(params[:id])
  end
end