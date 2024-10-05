local QBCore = exports['qb-core']:GetCoreObject()
local displayRadio = false

RegisterCommand('carradio', function()
    if IsPedInAnyVehicle(PlayerPedId(), false) then
        SetNuiFocus(true, true)
        SendNUIMessage({
            type = "openRadio"
        })
        displayRadio = true
    else
        QBCore.Functions.Notify("You must be in a vehicle to use the car radio.", "error")
    end
end)

RegisterNUICallback('closeRadio', function()
    SetNuiFocus(false, false)
    displayRadio = false
end)

RegisterNUICallback('changeStation', function(data)
    -- Here you would implement the logic to change the radio station in-game
    -- For example:
    -- SetVehicleRadioStation(GetVehiclePedIsIn(PlayerPedId(), false), data.station)
    QBCore.Functions.Notify("Changed station to " .. data.station, "success")
end)

-- Add more NUI callbacks as needed for other functionalities