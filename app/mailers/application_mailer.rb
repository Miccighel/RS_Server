class ApplicationMailer < ActionMailer::Base

  default from: "#{I18n.t("mails.labels.platform_name")} <#{ENV['SENDGRID_USERNAME']}>"
  layout 'mailer'

  def send_message(mail, message)
    @mail = mail
    @message = message
    mail(
        from: "User <#{@mail}>",
        to: "Readersourcing Team - <#{ENV['CONTACT_MAIL']}>",
        subject: "#{I18n.t("mails.labels.platform_name")} - #{I18n.t("mails.subject.contact_message")}",
        :template_path => 'application',
        :template_name => 'mails/message'
    )
  end

  def report(mail, message)
    @mail = mail
    @message = message
    mail(
        from: "User <#{@mail}>",
        to: "Readersourcing Team - <#{ENV['BUG_REPORT_MAIL']}>",
        subject: "#{I18n.t("mails.labels.platform_name")} - #{I18n.t("mails.subject.bug_report")}",
        :template_path => 'application',
        :template_name => 'mails/report'
    )
  end

end
