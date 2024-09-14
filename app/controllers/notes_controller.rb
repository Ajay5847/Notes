class NotesController < ApplicationController
  before_action :login_required
  before_action :fetch_note, except: :index

  def index
    @notes = Note.order(created_at: :desc)
  end

  def edit
  end

  def update
  end

private

  def fetch_note
    @note = Note.find(params[:id])
  end
end
