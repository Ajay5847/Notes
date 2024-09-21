# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  archived   :boolean          default(FALSE)
#  color      :string
#  pinned     :boolean          default(FALSE)
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_notes_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Note < ApplicationRecord
  belongs_to :user

  has_rich_text :content

  def pinned
    where(pinned: true)
  end
end
