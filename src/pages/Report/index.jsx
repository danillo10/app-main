import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { models } from 'powerbi-client'
import { handleReport } from 'services/api/reports'
import { handlePowerBiReportAad, handlePowerBiReportEmbed } from 'services/api/powerbi'
import { getUser } from 'services/auth'
import { PowerBIEmbed } from 'powerbi-client-react'
import './style.css'

const Page = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const { group_id, report_id, dataset_id } = params

  useEffect(() => {
    (async () => {
      new Promise(resolve => resolve(getUser()))
        .then(async res => {
          if (res.data.roles === 'admin') {
            const values = { report_id }
            const reportData = await handlePowerBiReportAad(values)
            setData({
              reportId: reportData.reportId,
              embedUrl: reportData.embedUrl,
              token: reportData.accessToken,
              type: models.TokenType.Aad
            })
          }
          if (res.data.roles === 'user') {
            const roles = await handleReport(report_id, res.data.id)
            if (roles.roles) {
              const values = {
                group_id,
                report_id,
                dataset: dataset_id,
                username: res.data.email,
                roles: roles.roles
              }
              const reportData = await handlePowerBiReportEmbed(values)
              setData({
                reportId: reportData.reportId,
                embedUrl: reportData.embedUrl,
                token: reportData.embedToken,
                page_navigation: roles.page_navigation,
                type: models.TokenType.Embed
              })
            } else {
              const values = { report_id }
              const reportData = await handlePowerBiReportAad(values)
              setData({
                reportId: reportData.reportId,
                embedUrl: reportData.embedUrl,
                token: reportData.accessToken,
                page_navigation: roles.page_navigation,
                type: models.TokenType.Aad
              })
            }
          }

        })
    })()
  }, [group_id, report_id, dataset_id])

  return (
    <>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: data.reportId,
          embedUrl: data.embedUrl,
          accessToken: data.token,
          tokenType: data.type,
          settings: {
            panes: {
              filters: {
                visible: false
              },
              pageNavigation: {
                visible: data.page_navigation ? data.page_navigation : false
              }
            }
          }
        }}
        cssClassName={"report"}
      />
    </>
  )
}

export default Page