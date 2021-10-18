class NotesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_user_note, only: [:edit, :update, :destroy]
  def index
    if current_user.notes.exists?
      @notes = current_user.notes.order(updated_at: params[:desc] || :desc).search(params[:search]).page(params[:page])
      @tags = current_user.tags.search(params[:search])
    else
      render "firstuse"
    end
  end

  def show
    @note = Note.find(params[:id])
    if !@note.public_status && @note.user != current_user
      redirect_to "/"
    else
      @comment = @note.comments.new
      @comments = @note.comments.order(updated_at: :asc)
      @likes = @note.likes.count
    end
  end

  def create
    @note = current_user.notes.create!
    redirect_to "/notes/#{@note.id}"
  end

  def edit
  end

  def update
    if @note.update(note_params)
      render json: @note.title
    else
      render json: {status: "error", message: "Save error"}
    end
  end

  def destroy
    if @note.destroy
      redirect_to "/notes"
    end
  end

  def is_public
    @note = Note.find(params[:id])
    if @note.public_status
      @note.update(public_status: false)
    else
      @note.update(public_status: true)
    end
    redirect_to note_path(@note)
  end
  
  private 
  def note_params
    params.require(:note).permit(:title, :content, :tag_list)
  end

  def find_user_note
    @note = current_user.notes.find(params[:id])
  end
end
