class NotesController < ApplicationController
  before_action :login_required
  before_action :fetch_note, except: :index

  def index
    @notes = Note.order(created_at: :desc)
  end

  def create
    @note = Note.create(note_params)
  end

  def edit
  end

  def update
    @note.update(note_params)
  end

private

  def fetch_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :content)
  end
end
