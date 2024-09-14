class NotesController < ApplicationController
  before_action :login_required

  def index
    @notes = Note.order(created_at: :desc)
  end
end
