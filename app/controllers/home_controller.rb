class HomeController < ApplicationController
  before_action :login_required, only: :home

  def index
  end

  def home
  end
end
