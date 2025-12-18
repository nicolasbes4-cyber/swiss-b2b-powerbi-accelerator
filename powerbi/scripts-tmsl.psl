param(
  [string]$WorkspaceId = $env:POWER_BI_WORKSPACE_ID,
  [string]$DatasetName = "Swiss_B2B_Consultative"
)

Connect-PowerBIServiceAccount -ServicePrincipal `
  -Credential (New-Object System.Management.Automation.PSCredential `
  ($env:AZURE_CLIENT_ID, (ConvertTo-SecureString $env:AZURE_CLIENT_SECRET -AsPlainText -Force))) `
  -TenantId $env:AZURE_TENANT_ID

New-PowerBIDataset -WorkspaceId $WorkspaceId -Name $DatasetName `
  -Tables (Get-Content "modele-tabulaire.pbit" | ConvertFrom-Json)

Write-Host "✅ Modèle déployé avec succès" -ForegroundColor Green
