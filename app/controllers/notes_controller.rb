class NotesController < ApplicationController
  before_action :login_required
  before_action :fetch_note, except: %i[index create]

  def index
    @notes = Note.order(created_at: :desc)
    @pinned_notes = @notes.pinned
    @notes = @notes.where(pinned: false)
  end

  def create
    @note = current_user.notes.create(note_params)
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
    params.require(:note).permit(:title, :content, :color, :pinned)
  end
end
