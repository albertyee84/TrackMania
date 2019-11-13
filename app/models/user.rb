class User < ApplicationRecord
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :username, :password_digest, presence: true, uniqueness: true
 
  before_validation :ensure_token

  attr_reader :password
  has_many :projects
  
  has_many :stories,
  foreign_key: :requestor_id,
  class_name: :Story


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_creds(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def ensure_token
     self.session_token ||= SecureRandom.urlsafe_base64
  end 

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
  end

end
